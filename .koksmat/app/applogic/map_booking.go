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
	"github.com/magicbutton/nexi-booking/services/models/bookingmodel"
   
)


func MapBookingOutgoing(db database.Booking) bookingmodel.Booking {
    return bookingmodel.Booking{
        ID:        db.ID,
        CreatedAt: db.CreatedAt,
        CreatedBy: db.CreatedBy,
        UpdatedAt: db.UpdatedAt,
        UpdatedBy: db.UpdatedBy,
                Name : db.Name,
        Description : db.Description,
                Desk_id : db.Desk_id,
                User_id : db.User_id,

    }
}

func MapBookingIncoming(in bookingmodel.Booking) database.Booking {
    return database.Booking{
        ID:        in.ID,
        CreatedAt: in.CreatedAt,
        CreatedBy: in.CreatedBy,
        UpdatedAt: in.UpdatedAt,
        UpdatedBy: in.UpdatedBy,
                Name : in.Name,
        Description : in.Description,
                Desk_id : in.Desk_id,
                User_id : in.User_id,
        Searchindex : in.Name,

    }
}
