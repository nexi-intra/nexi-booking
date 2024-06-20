/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.search.v2
package restrictiongroup

import (
    "log"

    "github.com/nexi-intra/nexi-booking/applogic"
    "github.com/nexi-intra/nexi-booking/database"
    "github.com/nexi-intra/nexi-booking/services/models/restrictiongroupmodel"
    . "github.com/nexi-intra/nexi-booking/utils"
)

func RestrictionGroupSearch(query string) (*Page[restrictiongroupmodel.RestrictionGroup], error) {
    log.Println("Calling RestrictionGroupsearch")

    return applogic.Search[database.RestrictionGroup, restrictiongroupmodel.RestrictionGroup]("searchindex", query, applogic.MapRestrictionGroupOutgoing)

}
