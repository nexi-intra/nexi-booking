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
	"github.com/magicbutton/nexi-booking/services/models/sitemodel"
   
)


func MapSiteOutgoing(db database.Site) sitemodel.Site {
    return sitemodel.Site{
        ID:        db.ID,
        CreatedAt: db.CreatedAt,
        CreatedBy: db.CreatedBy,
        UpdatedAt: db.UpdatedAt,
        UpdatedBy: db.UpdatedBy,
                Name : db.Name,
        Description : db.Description,
        Code : db.Code,
                Country_id : db.Country_id,

    }
}

func MapSiteIncoming(in sitemodel.Site) database.Site {
    return database.Site{
        ID:        in.ID,
        CreatedAt: in.CreatedAt,
        CreatedBy: in.CreatedBy,
        UpdatedAt: in.UpdatedAt,
        UpdatedBy: in.UpdatedBy,
                Name : in.Name,
        Description : in.Description,
        Code : in.Code,
                Country_id : in.Country_id,
        Searchindex : in.Name,

    }
}
