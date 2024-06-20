/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.search.v2
package person

import (
	"log"

	"github.com/nexi-intra/nexi-booking/applogic"
	"github.com/nexi-intra/nexi-booking/database"
	"github.com/nexi-intra/nexi-booking/services/models/personmodel"
	. "github.com/nexi-intra/nexi-booking/utils"
)

func PersonSearch(query string) (*Page[personmodel.Person], error) {
	log.Println("Calling Personsearch")

	return applogic.Search[database.Person, personmodel.Person]("searchindex", query, applogic.MapPersonOutgoing)

}
