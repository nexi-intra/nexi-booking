/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.create.v2
package person

import (
	"log"

	"github.com/nexi-intra/nexi-booking/applogic"
	"github.com/nexi-intra/nexi-booking/database"
	"github.com/nexi-intra/nexi-booking/services/models/personmodel"
)

func PersonCreate(item personmodel.Person) (*personmodel.Person, error) {
	log.Println("Calling Personcreate")

	return applogic.Create[database.Person, personmodel.Person](item, applogic.MapPersonIncoming, applogic.MapPersonOutgoing)

}
