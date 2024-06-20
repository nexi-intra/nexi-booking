/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.update.v2
package relation

import (
	"log"

	"github.com/nexi-intra/nexi-booking/applogic"
	"github.com/nexi-intra/nexi-booking/database"
	"github.com/nexi-intra/nexi-booking/services/models/relationmodel"
)

func RelationUpdate(item relationmodel.Relation) (*relationmodel.Relation, error) {
	log.Println("Calling Relationupdate")

	return applogic.Update[database.Relation, relationmodel.Relation](item.ID, item, applogic.MapRelationIncoming, applogic.MapRelationOutgoing)

}
