/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.search.v2
package floor

import (
    "log"

    "github.com/nexi-intra/nexi-booking/applogic"
    "github.com/nexi-intra/nexi-booking/database"
    "github.com/nexi-intra/nexi-booking/services/models/floormodel"
    . "github.com/nexi-intra/nexi-booking/utils"
)

func FloorSearch(query string) (*Page[floormodel.Floor], error) {
    log.Println("Calling Floorsearch")

    return applogic.Search[database.Floor, floormodel.Floor]("searchindex", query, applogic.MapFloorOutgoing)

}
