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

    "github.com/magicbutton/nexi-booking/applogic"
    "github.com/magicbutton/nexi-booking/database"
    "github.com/magicbutton/nexi-booking/services/models/restrictiongroupmodel"
    . "github.com/magicbutton/nexi-booking/utils"
)

func Restriction GroupSearch(query string) (*Page[restrictiongroupmodel.Restriction Group], error) {
    log.Println("Calling Restriction Groupsearch")

    return applogic.Search[database.Restriction Group, restrictiongroupmodel.Restriction Group]("searchindex", query, applogic.MapRestriction GroupOutgoing)

}
