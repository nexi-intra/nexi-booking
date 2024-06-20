/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v2
package restrictiongroupmodel
import (
	"encoding/json"
	"time"
    // 
)

func UnmarshalRestrictionGroup(data []byte) (RestrictionGroup, error) {
	var r RestrictionGroup
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *RestrictionGroup) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type RestrictionGroup struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    CreatedBy string `json:"created_by"`
    UpdatedAt time.Time `json:"updated_at"`
    UpdatedBy string `json:"updated_by"`
        Name string `json:"name"`
    Description string `json:"description"`
    Code string `json:"code"`

}

