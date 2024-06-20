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
    "github.com/nexi-intra/nexi-booking/applogic"
    "github.com/nexi-intra/nexi-booking/database"
    "github.com/nexi-intra/nexi-booking/services/models/restrictiongroupmodel"

)

func RestrictionGroupRead(arg0 string) (*restrictiongroupmodel.RestrictionGroup, error) {
    id,_ := strconv.Atoi(arg0)
    log.Println("Calling RestrictionGroupread")

    return applogic.Read[database.RestrictionGroup, restrictiongroupmodel.RestrictionGroup](id, applogic.MapRestrictionGroupOutgoing)

}
