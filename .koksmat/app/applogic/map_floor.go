/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
//GenerateMapModel v1.1
package applogic
import (
	//"encoding/json"
	//"time"
	"github.com/magicbutton/nexi-booking/database"
	"github.com/magicbutton/nexi-booking/services/models/floormodel"
   
)


func MapFloorOutgoing(db database.Floor) floormodel.Floor {
    return floormodel.Floor{
        ID:        db.ID,
        CreatedAt: db.CreatedAt,
        CreatedBy: db.CreatedBy,
        UpdatedAt: db.UpdatedAt,
        UpdatedBy: db.UpdatedBy,
                Name : db.Name,
        Description : db.Description,
        Code : db.Code,
        Floorplan : db.Floorplan,
                Building_id : db.Building_id,

    }
}

func MapFloorIncoming(in floormodel.Floor) database.Floor {
    return database.Floor{
        ID:        in.ID,
        CreatedAt: in.CreatedAt,
        CreatedBy: in.CreatedBy,
        UpdatedAt: in.UpdatedAt,
        UpdatedBy: in.UpdatedBy,
                Name : in.Name,
        Description : in.Description,
        Code : in.Code,
        Floorplan : in.Floorplan,
                Building_id : in.Building_id,
        Searchindex : in.Name,

    }
}
