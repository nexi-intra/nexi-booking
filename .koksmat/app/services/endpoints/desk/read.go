/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.read.v2
package desk

import (
    "log"
    "strconv"
    "github.com/nexi-intra/nexi-booking/applogic"
    "github.com/nexi-intra/nexi-booking/database"
    "github.com/nexi-intra/nexi-booking/services/models/deskmodel"

)

func DeskRead(arg0 string) (*deskmodel.Desk, error) {
    id,_ := strconv.Atoi(arg0)
    log.Println("Calling Deskread")

    return applogic.Read[database.Desk, deskmodel.Desk](id, applogic.MapDeskOutgoing)

}
