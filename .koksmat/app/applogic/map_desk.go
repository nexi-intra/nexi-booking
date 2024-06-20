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
	"github.com/nexi-intra/nexi-booking/database"
	"github.com/nexi-intra/nexi-booking/services/models/deskmodel"
   
)


func MapDeskOutgoing(db database.Desk) deskmodel.Desk {
    return deskmodel.Desk{
        ID:        db.ID,
        CreatedAt: db.CreatedAt,
        CreatedBy: db.CreatedBy,
        UpdatedAt: db.UpdatedAt,
        UpdatedBy: db.UpdatedBy,
                Name : db.Name,
        Description : db.Description,
        Code : db.Code,
                Floor_id : db.Floor_id,
        Metadata : db.Metadata,

    }
}

func MapDeskIncoming(in deskmodel.Desk) database.Desk {
    return database.Desk{
        ID:        in.ID,
        CreatedAt: in.CreatedAt,
        CreatedBy: in.CreatedBy,
        UpdatedAt: in.UpdatedAt,
        UpdatedBy: in.UpdatedBy,
                Name : in.Name,
        Description : in.Description,
        Code : in.Code,
                Floor_id : in.Floor_id,
        Metadata : in.Metadata,
        Searchindex : in.Name,

    }
}
