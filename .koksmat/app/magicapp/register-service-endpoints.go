/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
package magicapp

import (
	"github.com/nexi-intra/nexi-booking/services"
	"github.com/nats-io/nats.go/micro"
)

func RegisterServiceEndpoints(root micro.Group) {
    root.AddEndpoint("user", micro.HandlerFunc(services.HandleUserRequests))
        root.AddEndpoint("country", micro.HandlerFunc(services.HandleCountryRequests))
        root.AddEndpoint("site", micro.HandlerFunc(services.HandleSiteRequests))
        root.AddEndpoint("building", micro.HandlerFunc(services.HandleBuildingRequests))
        root.AddEndpoint("floor", micro.HandlerFunc(services.HandleFloorRequests))
        root.AddEndpoint("desk", micro.HandlerFunc(services.HandleDeskRequests))
        root.AddEndpoint("restrictiongroup", micro.HandlerFunc(services.HandleRestrictionGroupRequests))
        root.AddEndpoint("booking", micro.HandlerFunc(services.HandleBookingRequests))
    }
