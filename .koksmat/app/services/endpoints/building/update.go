/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.update.v2
package building

import (
    "log"

    "github.com/nexi-intra/nexi-booking/applogic"
    "github.com/nexi-intra/nexi-booking/database"
    "github.com/nexi-intra/nexi-booking/services/models/buildingmodel"

)

func BuildingUpdate(item buildingmodel.Building) (*buildingmodel.Building, error) {
    log.Println("Calling Buildingupdate")

    return applogic.Update[database.Building, buildingmodel.Building](item.ID,item, applogic.MapBuildingIncoming, applogic.MapBuildingOutgoing)

}
