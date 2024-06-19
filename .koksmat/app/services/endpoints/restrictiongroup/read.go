/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.read.v2
package restrictiongroup

import (
    "log"
    "strconv"
    "github.com/magicbutton/nexi-booking/applogic"
    "github.com/magicbutton/nexi-booking/database"
    "github.com/magicbutton/nexi-booking/services/models/restrictiongroupmodel"

)

func Restriction GroupRead(arg0 string) (*restrictiongroupmodel.Restriction Group, error) {
    id,_ := strconv.Atoi(arg0)
    log.Println("Calling Restriction Groupread")

    return applogic.Read[database.Restriction Group, restrictiongroupmodel.Restriction Group](id, applogic.MapRestriction GroupOutgoing)

}
