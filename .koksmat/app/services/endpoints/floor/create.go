/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.create.v2
package floor

import (
    "log"
   
    "github.com/magicbutton/nexi-booking/applogic"
    "github.com/magicbutton/nexi-booking/database"
    "github.com/magicbutton/nexi-booking/services/models/floormodel"

)

func FloorCreate(item floormodel.Floor) (*floormodel.Floor, error) {
    log.Println("Calling Floorcreate")

    return applogic.Create[database.Floor, floormodel.Floor](item, applogic.MapFloorIncoming, applogic.MapFloorOutgoing)

}
