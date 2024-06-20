/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.read.v2
package person

import (
	"github.com/nexi-intra/nexi-booking/applogic"
	"github.com/nexi-intra/nexi-booking/database"
	"github.com/nexi-intra/nexi-booking/services/models/personmodel"
	"log"
	"strconv"
)

func PersonRead(arg0 string) (*personmodel.Person, error) {
	id, _ := strconv.Atoi(arg0)
	log.Println("Calling Personread")

	return applogic.Read[database.Person, personmodel.Person](id, applogic.MapPersonOutgoing)

}
