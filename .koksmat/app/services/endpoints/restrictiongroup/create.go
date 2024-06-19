/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.create.v2
package restrictiongroup

import (
    "log"
   
    "github.com/magicbutton/nexi-booking/applogic"
    "github.com/magicbutton/nexi-booking/database"
    "github.com/magicbutton/nexi-booking/services/models/restrictiongroupmodel"

)

func Restriction GroupCreate(item restrictiongroupmodel.Restriction Group) (*restrictiongroupmodel.Restriction Group, error) {
    log.Println("Calling Restriction Groupcreate")

    return applogic.Create[database.Restriction Group, restrictiongroupmodel.Restriction Group](item, applogic.MapRestriction GroupIncoming, applogic.MapRestriction GroupOutgoing)

}
