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
        "github.com/nexi-intra/nexi-booking/services/endpoints/floor"
                    "github.com/nexi-intra/nexi-booking/services/models/floormodel"
        "github.com/stretchr/testify/assert"
    )
    
    func TestFloorcreate(t *testing.T) {
                                // transformer v1
            object := floormodel.Floor{}
         
            result,err := floor.FloorCreate(object)
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
