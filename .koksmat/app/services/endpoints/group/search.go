/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.search.v2
package group

import (
	"log"

	"github.com/nexi-intra/nexi-booking/applogic"
	"github.com/nexi-intra/nexi-booking/database"
	"github.com/nexi-intra/nexi-booking/services/models/groupmodel"
	. "github.com/nexi-intra/nexi-booking/utils"
)

func GroupSearch(query string) (*Page[groupmodel.Group], error) {
	log.Println("Calling Groupsearch")

	return applogic.Search[database.Group, groupmodel.Group]("searchindex", query, applogic.MapGroupOutgoing)

}
