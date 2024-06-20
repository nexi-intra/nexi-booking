/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.search.v2
package system

import (
	"log"

	"github.com/nexi-intra/nexi-booking/applogic"
	"github.com/nexi-intra/nexi-booking/database"
	"github.com/nexi-intra/nexi-booking/services/models/systemmodel"
	. "github.com/nexi-intra/nexi-booking/utils"
)

func SystemSearch(query string) (*Page[systemmodel.System], error) {
	log.Println("Calling Systemsearch")

	return applogic.Search[database.System, systemmodel.System]("searchindex", query, applogic.MapSystemOutgoing)

}
