/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v2
package bookingmodel
import (
	"encoding/json"
	"time"
    // "github.com/magicbutton/nexi-booking/database/databasetypes"
)

func UnmarshalBooking(data []byte) (Booking, error) {
	var r Booking
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Booking) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Booking struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    CreatedBy string `json:"created_by"`
    UpdatedAt time.Time `json:"updated_at"`
    UpdatedBy string `json:"updated_by"`
        Name string `json:"name"`
    Description string `json:"description"`
    Desk_id int `json:"desk_id"`
    User_id int `json:"user_id"`
    Fromdatetime time.Time `json:"fromdatetime"`
    Todatetime time.Time `json:"todatetime"`

}

