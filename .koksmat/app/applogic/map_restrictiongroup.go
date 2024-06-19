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
	"github.com/magicbutton/nexi-booking/services/models/restrictiongroupmodel"
   
)


func MapRestriction GroupOutgoing(db database.Restriction Group) restrictiongroupmodel.Restriction Group {
    return restrictiongroupmodel.Restriction Group{
        ID:        db.ID,
        CreatedAt: db.CreatedAt,
        CreatedBy: db.CreatedBy,
        UpdatedAt: db.UpdatedAt,
        UpdatedBy: db.UpdatedBy,
                Name : db.Name,
        Description : db.Description,
        Code : db.Code,

    }
}

func MapRestriction GroupIncoming(in restrictiongroupmodel.Restriction Group) database.Restriction Group {
    return database.Restriction Group{
        ID:        in.ID,
        CreatedAt: in.CreatedAt,
        CreatedBy: in.CreatedBy,
        UpdatedAt: in.UpdatedAt,
        UpdatedBy: in.UpdatedBy,
                Name : in.Name,
        Description : in.Description,
        Code : in.Code,
        Searchindex : in.Name,

    }
}
