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
	"github.com/magicbutton/nexi-booking/services/models/usermodel"
   
)


func MapUserOutgoing(db database.User) usermodel.User {
    return usermodel.User{
        ID:        db.ID,
        CreatedAt: db.CreatedAt,
        CreatedBy: db.CreatedBy,
        UpdatedAt: db.UpdatedAt,
        UpdatedBy: db.UpdatedBy,
                Name : db.Name,
        Description : db.Description,
                Homecountry_id : db.Homecountry_id,

    }
}

func MapUserIncoming(in usermodel.User) database.User {
    return database.User{
        ID:        in.ID,
        CreatedAt: in.CreatedAt,
        CreatedBy: in.CreatedBy,
        UpdatedAt: in.UpdatedAt,
        UpdatedBy: in.UpdatedBy,
                Name : in.Name,
        Description : in.Description,
                Homecountry_id : in.Homecountry_id,
        Searchindex : in.Name,

    }
}
