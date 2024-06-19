/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.create.v2
package desk

import (
    "log"
   
    "github.com/magicbutton/nexi-booking/applogic"
    "github.com/magicbutton/nexi-booking/database"
    "github.com/magicbutton/nexi-booking/services/models/deskmodel"

)

func DeskCreate(item deskmodel.Desk) (*deskmodel.Desk, error) {
    log.Println("Calling Deskcreate")

    return applogic.Create[database.Desk, deskmodel.Desk](item, applogic.MapDeskIncoming, applogic.MapDeskOutgoing)

}
