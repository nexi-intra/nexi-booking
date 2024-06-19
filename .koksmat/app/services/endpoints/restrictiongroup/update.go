/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.update.v2
package restrictiongroup

import (
    "log"

    "github.com/magicbutton/nexi-booking/applogic"
    "github.com/magicbutton/nexi-booking/database"
    "github.com/magicbutton/nexi-booking/services/models/restrictiongroupmodel"

)

func Restriction GroupUpdate(item restrictiongroupmodel.Restriction Group) (*restrictiongroupmodel.Restriction Group, error) {
    log.Println("Calling Restriction Groupupdate")

    return applogic.Update[database.Restriction Group, restrictiongroupmodel.Restriction Group](item.ID,item, applogic.MapRestriction GroupIncoming, applogic.MapRestriction GroupOutgoing)

}
