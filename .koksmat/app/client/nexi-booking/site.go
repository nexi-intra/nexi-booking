/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v3.api
package nexibooking
import (

	"time"
    // "github.com/nexi-intra/nexi-booking/database/databasetypes"
)


type Site struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    CreatedBy string `json:"created_by"`
    UpdatedAt time.Time `json:"updated_at"`
    UpdatedBy string `json:"updated_by"`
        Name string `json:"name"`
    Description string `json:"description"`
    Code string `json:"code"`
    Country_id int `json:"country_id"`
    Parkingenabled bool `json:"parkingenabled"`
    Deskbookingenabled bool `json:"deskbookingenabled"`

}

