/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.create.v2
package system

import (
	"log"

	"github.com/nexi-intra/nexi-booking/applogic"
	"github.com/nexi-intra/nexi-booking/database"
	"github.com/nexi-intra/nexi-booking/services/models/systemmodel"
)

func SystemCreate(item systemmodel.System) (*systemmodel.System, error) {
	log.Println("Calling Systemcreate")

	return applogic.Create[database.System, systemmodel.System](item, applogic.MapSystemIncoming, applogic.MapSystemOutgoing)

}
