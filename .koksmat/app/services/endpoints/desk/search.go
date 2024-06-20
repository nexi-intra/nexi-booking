/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.search.v2
package desk

import (
    "log"

    "github.com/nexi-intra/nexi-booking/applogic"
    "github.com/nexi-intra/nexi-booking/database"
    "github.com/nexi-intra/nexi-booking/services/models/deskmodel"
    . "github.com/nexi-intra/nexi-booking/utils"
)

func DeskSearch(query string) (*Page[deskmodel.Desk], error) {
    log.Println("Calling Desksearch")

    return applogic.Search[database.Desk, deskmodel.Desk]("searchindex", query, applogic.MapDeskOutgoing)

}
