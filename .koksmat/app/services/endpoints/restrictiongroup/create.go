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
   
    "github.com/nexi-intra/nexi-booking/applogic"
    "github.com/nexi-intra/nexi-booking/database"
    "github.com/nexi-intra/nexi-booking/services/models/restrictiongroupmodel"

)

func RestrictionGroupCreate(item restrictiongroupmodel.RestrictionGroup) (*restrictiongroupmodel.RestrictionGroup, error) {
    log.Println("Calling RestrictionGroupcreate")

    return applogic.Create[database.RestrictionGroup, restrictiongroupmodel.RestrictionGroup](item, applogic.MapRestrictionGroupIncoming, applogic.MapRestrictionGroupOutgoing)

}
