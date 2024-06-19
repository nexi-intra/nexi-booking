    /* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
    //generator:  noma4.1
    package tests
    import (
        "testing"
        "github.com/magicbutton/nexi-booking/services/endpoints/desk"
                    "github.com/magicbutton/nexi-booking/services/models/deskmodel"
        "github.com/stretchr/testify/assert"
    )
    
    func TestDeskcreate(t *testing.T) {
                                // transformer v1
            object := deskmodel.Desk{}
         
            result,err := desk.DeskCreate(object)
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
