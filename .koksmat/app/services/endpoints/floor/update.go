/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.update.v2
package floor

import (
    "log"

    "github.com/nexi-intra/nexi-booking/applogic"
    "github.com/nexi-intra/nexi-booking/database"
    "github.com/nexi-intra/nexi-booking/services/models/floormodel"

)

func FloorUpdate(item floormodel.Floor) (*floormodel.Floor, error) {
    log.Println("Calling Floorupdate")

    return applogic.Update[database.Floor, floormodel.Floor](item.ID,item, applogic.MapFloorIncoming, applogic.MapFloorOutgoing)

}
