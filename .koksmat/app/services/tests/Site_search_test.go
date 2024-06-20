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
        "github.com/nexi-intra/nexi-booking/services/endpoints/site"
        
        "github.com/stretchr/testify/assert"
    )
    
    func TestSitesearch(t *testing.T) {
                    
            result,err := site.SiteSearch(".")
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
