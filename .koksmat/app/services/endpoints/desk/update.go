/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.update.v2
package desk

import (
    "log"

    "github.com/nexi-intra/nexi-booking/applogic"
    "github.com/nexi-intra/nexi-booking/database"
    "github.com/nexi-intra/nexi-booking/services/models/deskmodel"

)

func DeskUpdate(item deskmodel.Desk) (*deskmodel.Desk, error) {
    log.Println("Calling Deskupdate")

    return applogic.Update[database.Desk, deskmodel.Desk](item.ID,item, applogic.MapDeskIncoming, applogic.MapDeskOutgoing)

}
