/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v2
package sitemodel
import (
	"encoding/json"
	"time"
    // "github.com/magicbutton/nexi-booking/database/databasetypes"
)

func UnmarshalSite(data []byte) (Site, error) {
	var r Site
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Site) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

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

}

