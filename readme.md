---
title: Template for a Magic App
description: This architecture ensures that frontend developers focus solely on building the user interface and client-side logic, without direct access to production data. Backend developers manage data processing and API creation, maintaining strict access controls through the MagicPot. The use of GitHub Actions for continuous integration and deployment automates the process of building and publishing Docker images, while the PowerShell script facilitates seamless deployment to Kubernetes.
---

### Architecture Overview

The architecture of the KOKSMAT framework ensures a clear separation between frontend and backend developers, with specific roles and access levels.

#### Frontend (Next.js Application)

- **Technologies Used**: Next.js 14, TypeScript, Tailwind CSS, shadcn-ui components
- **Location**: `.koksmat/web`
- **Responsibilities**:
  - Developing user interfaces and client-side logic
  - Handling user authentication via Microsoft Online
  - Consuming backend APIs (MagicPot) for all data interactions
  - Never interacting directly with production data

#### Backend (Go Application)

- **Technologies Used**: Go, Postgres, Kubernetes
- **Location**: `.koksmat/app`
- **Responsibilities**:
  - Building and managing APIs using the API builder developed for NDA staff
  - Handling business logic, data processing, and storage
  - Issuing JWT tokens for secure API access
  - Ensuring data integrity and security

### MagicPot - The Central API

The MagicPot serves as the single entry point for all backend interactions, with strict access control:

- **Anonymous Endpoint**:
  - **Purpose**: Issue access tokens
  - **Authentication**: Uses Microsoft Online to issue JWT tokens, valid for 10 minutes

### Getting Started with a New Project

To start a new project using the KOKSMAT framework, follow these steps:

1. **Decide on a Project Name**: Choose a subject matter for the project, formatted as two words separated by a dash (e.g., `intranet-tools`).

2. **Create a New Repository**:

   - Use the master template repository: [magic-master](https://github.com/magicbutton/magic-master)
   - Name the new repository according to the project subject (e.g., `intranet-tools`).

3. **Set Up the Repository**:

   - Clone the new repository to your local machine or open it in GitHub Codespaces.
   - Rename the project folder to match the subject (e.g., `tools`).

4. **Update Configuration**:
   - Open `.koksmat/web/app/global.ts`.
   - Update the `APPNAME` variable to match your project name (e.g., `tools`).
   - Change the `clientId` and `authority` values to match your Azure tenant configuration:
     ```typescript
     export const APPNAME = "tools";
     export const CLARITY = "your-clarity-key";
     export const MSAL = {
       clientId: "your-client-id",
       authority: "https://login.microsoftonline.com/your-tenant-id",
       redirectUri: "/",
       postLogoutRedirectUri: "/",
     };
     ```

### Continuous Integration and Deployment with GitHub Actions

The KOKSMAT framework leverages GitHub Actions for continuous integration and deployment, specifically for publishing Docker images and deploying them to Kubernetes. This process is triggered whenever a new release is made.

#### GitHub Actions for Publishing Docker Images

1. **Configuration File**:

   - The release tag and image name are controlled by the `.koksmat/koksmat.json` file:
     ```json
     {
       "version": {
         "minor": 0,
         "build": 5,
         "patch": 5,
         "major": 0
       },
       "appname": "magic-people",
       "dnsprod": "people.intra.nexigroup.com",
       "dnstest": "people-test.intra.nexigroup.com",
       "imagename": "ghcr.io/magicbutton/magic-people",
       "port": 4444
     }
     ```

2. **GitHub Actions Workflow**:

   - The workflow is triggered on creating a new release, building the Docker image, and pushing it to the GitHub Container Registry:

     ```yaml
     name: Build and Publish Docker Image

     on:
       release:
         types: [published]

     jobs:
       build:
         runs-on: ubuntu-latest

         steps:
           - name: Checkout code
             uses: actions/checkout@v2

           - name: Set up Docker Buildx
             uses: docker/setup-buildx-action@v1

           - name: Login to GitHub Container Registry
             uses: docker/login-action@v1
             with:
               registry: ghcr.io
               username: ${{ github.actor }}
               password: ${{ secrets.GITHUB_TOKEN }}

           - name: Extract version
             id: extract_version
             run: |
               version=$(jq -r '.version.major+"."+ .version.minor+"."+ .version.patch+"."+ .version.build' .koksmat/koksmat.json)
               echo "::set-output name=version::$version"

           - name: Build and push Docker image
             run: |
               imagename=$(jq -r '.imagename' .koksmat/koksmat.json)
               version=${{ steps.extract_version.outputs.version }}
               docker build -t $imagename:$version .
               docker push $imagename:$version
     ```

#### Deploying to Kubernetes

The deployment manifest is generated and published to Kubernetes using a PowerShell script located at `60-provision/10-web.ps1`.

- **PowerShell Script**:

  - This script reads the `koksmat.json` file, generates a Kubernetes manifest, and applies it:

        ```powershell
        <#---
        title: Web deploy to production
        tag: webdeployproduction
        api: post
        ---#>

        if ((Split-Path -Leaf (Split-Path  -Parent -Path $PSScriptRoot)) -eq "sessions") {
          $path = join-path $PSScriptRoot ".." ".."
        }
        else {
          $path = join-path $PSScriptRoot ".." ".koksmat/"

        }

        $koksmatDir = Resolve-Path $path

        $inputFile = join-path  $koksmatDir "koksmat.json"

        if (!(Test-Path -Path $inputFile) ) {
          Throw "Cannot find file at expected path: $inputFile"
        }
        $json = Get-Content -Path $inputFile | ConvertFrom-Json
        $version = "v$($json.version.major).$($json.version.minor).$($json.version.patch).$($json.version.build)"
        $port = "$($json.port)"
        $appname = $json.appname
        $imagename = $json.imagename
        $dnsname = $json.dnsprod

        $image = "$($imagename)-web:$($version)"

        $config = @"
        apiVersion: v1
        kind: PersistentVolumeClaim
        metadata:
          name: pvc-$appname
        spec:
          accessModes:
            - ReadWriteMany
          resources:
            requests:
              storage: 1Gi
          storageClassName: azurefile
        ---
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          name: $appname
        spec:
          selector:
            matchLabels:
              app: $appname
          replicas: 1
          template:
            metadata:
              labels:
                app: $appname
            spec:
              containers:
              - name: $appname
                image: $image
                ports:
                  - containerPort: $port
                env:
                - name: NATS
                  value: nats://nats:4222
                - name: DATAPATH
                  value: /data
                volumeMounts:
                - mountPath: /data
                  name: data
              volumes:
              - name: data
                persistentVolumeClaim:
                  claimName: pvc-$appname
        ---
        apiVersion: v1
        kind: Service
        metadata:
          name: $appname
          labels:
            app: $appname
            service: $appname
        spec:
          ports:
          - name: http
            port: 5301
            targetPort: $port
          selector:
            app: $appname
        ---
        apiVersion: networking.k8s.io/v1
        kind: Ingress
        metadata:
          name: $appname
        spec:
          rules:
          - host: $dnsname
            http:
              paths:
              - path: /
                pathType: Prefix
                backend:
                  service:
                    name: $appname
                    port:
                      number: 5301
        "@

        write-host "Applying config" -ForegroundColor Green
        write-host $config -ForegroundColor Gray
        $config |  kubectl apply -f -
  ```mermaid

    erDiagram
    COUNTRY ||--o{ SITE: "contains"
    SITE ||--o{ BUILDING: "contains"
    BUILDING ||--o{ FLOOR: "contains"
    FLOOR ||--o{ DESK: "contains"
    COUNTRY ||--o{ USER: "home country of"
    DESK ||--o{ BOOKING: "has"
    USER ||--o{ BOOKING: "makes"
    USER ||--o{ USER_M2M_DESK: "has"
    DESK ||--o{ USER_M2M_DESK: "has"
    RESTRICTIONGROUP ||--o{ RESTRICTIONGROUP_M2M_DESK: "has"
    DESK ||--o{ RESTRICTIONGROUP_M2M_DESK: "has"
    RESTRICTIONGROUP ||--o{ RESTRICTIONGROUP_M2M_USER: "has"
    USER ||--o{ RESTRICTIONGROUP_M2M_USER: "has"

        COUNTRY {
            int id PK
            timestamp created_at
            varchar created_by
            timestamp updated_at
            varchar updated_by
            timestamp deleted_at
            varchar tenant
            varchar searchindex
            varchar name
            varchar description
            varchar code
            jsonb metadata
        }

        SITE {
            int id PK
            timestamp created_at
            varchar created_by
            timestamp updated_at
            varchar updated_by
            timestamp deleted_at
            varchar tenant
            varchar searchindex
            varchar name
            varchar description
            varchar code
            int country_id FK
        }

        BUILDING {
            int id PK
            timestamp created_at
            varchar created_by
            timestamp updated_at
            varchar updated_by
            timestamp deleted_at
            varchar tenant
            varchar searchindex
            varchar name
            varchar description
            varchar code
            int site_id FK
        }

        FLOOR {
            int id PK
            timestamp created_at
            varchar created_by
            timestamp updated_at
            varchar updated_by
            timestamp deleted_at
            varchar tenant
            varchar searchindex
            varchar name
            varchar description
            varchar code
            varchar floorplan
            int building_id FK
        }

        DESK {
            int id PK
            timestamp created_at
            varchar created_by
            timestamp updated_at
            varchar updated_by
            timestamp deleted_at
            varchar tenant
            varchar searchindex
            varchar name
            varchar description
            varchar code
            int floor_id FK
            jsonb metadata
        }

        USER {
            int id PK
            timestamp created_at
            varchar created_by
            timestamp updated_at
            varchar updated_by
            timestamp deleted_at
            varchar tenant
            varchar searchindex
            varchar name
            varchar description
            int homecountry_id FK
        }

        USER_M2M_DESK {
            int id PK
            timestamp created_at
            varchar created_by
            timestamp updated_at
            varchar updated_by
            timestamp deleted_at
            int user_id FK
            int desk_id FK
        }

        RESTRICTIONGROUP {
            int id PK
            timestamp created_at
            varchar created_by
            timestamp updated_at
            varchar updated_by
            timestamp deleted_at
            varchar tenant
            varchar searchindex
            varchar name
            varchar description
            varchar code
        }

        RESTRICTIONGROUP_M2M_DESK {
            int id PK
            timestamp created_at
            varchar created_by
            timestamp updated_at
            varchar updated_by
            timestamp deleted_at
            int restrictiongroup_id FK
            int desk_id FK
        }

        RESTRICTIONGROUP_M2M_USER {
            int id PK
            timestamp created_at
            varchar created_by
            timestamp updated_at
            varchar updated_by
            timestamp deleted_at
            int restrictiongroup_id FK
            int user_id FK
        }

        BOOKING {
            int id PK
            timestamp created_at
            varchar created_by
            timestamp updated_at
            varchar updated_by
            timestamp deleted_at
            varchar tenant
            varchar searchindex
            varchar name
            varchar description
            int desk_id FK
            int user_id FK
            varchar fromdatetime
            varchar todatetime
        }
