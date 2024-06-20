/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.read.v2
package group

import (
	"github.com/nexi-intra/nexi-booking/applogic"
	"github.com/nexi-intra/nexi-booking/database"
	"github.com/nexi-intra/nexi-booking/services/models/groupmodel"
	"log"
	"strconv"
)

func GroupRead(arg0 string) (*groupmodel.Group, error) {
	id, _ := strconv.Atoi(arg0)
	log.Println("Calling Groupread")

	return applogic.Read[database.Group, groupmodel.Group](id, applogic.MapGroupOutgoing)

}
