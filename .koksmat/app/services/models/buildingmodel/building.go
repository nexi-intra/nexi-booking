/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v2
package buildingmodel
import (
	"encoding/json"
	"time"
    // "github.com/magicbutton/nexi-booking/database/databasetypes"
)

func UnmarshalBuilding(data []byte) (Building, error) {
	var r Building
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Building) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Building struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    CreatedBy string `json:"created_by"`
    UpdatedAt time.Time `json:"updated_at"`
    UpdatedBy string `json:"updated_by"`
        Name string `json:"name"`
    Description string `json:"description"`
    Code string `json:"code"`
    Site_id int `json:"site_id"`

}

