/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: true
---
*/
// macd.1
package services

import (
	"encoding/json"

	"github.com/nats-io/nats.go/micro"
	"github.com/nexi-intra/nexi-booking/services/endpoints/app"
	. "github.com/nexi-intra/nexi-booking/utils"
)

func HandleAppRequests(req micro.Request) {

	rawRequest := string(req.Data())
	if rawRequest == "ping" {
		req.Respond([]byte("pong"))
		return

	}

	var payload ServiceRequest
	_ = json.Unmarshal([]byte(req.Data()), &payload)
	if len(payload.Args) < 1 {
		ServiceResponseError(req, "missing command")
		return

	}
	switch payload.Args[0] {

	// macd.2

	case "select":
		ProcessAppRequest(req, app.Select)
	case "process":
		ProcessAppRequest(req, app.Process)
	default:
		ServiceResponseError(req, "Unknown command")
	}
}
