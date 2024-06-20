/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.create.v2
package group

import (
	"log"

	"github.com/nexi-intra/nexi-booking/applogic"
	"github.com/nexi-intra/nexi-booking/database"
	"github.com/nexi-intra/nexi-booking/services/models/groupmodel"
)

func GroupCreate(item groupmodel.Group) (*groupmodel.Group, error) {
	log.Println("Calling Groupcreate")

	return applogic.Create[database.Group, groupmodel.Group](item, applogic.MapGroupIncoming, applogic.MapGroupOutgoing)

}
