            /*
            File have been automatically created. To prevent the file from getting overwritten
            set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
            ---
            keep: false
            ---
            */
            //generator:  noma3.delete.v2
            package restrictiongroup
            
            import (
                "log"
                "strconv"
                "github.com/nexi-intra/nexi-booking/applogic"
                "github.com/nexi-intra/nexi-booking/database"
                "github.com/nexi-intra/nexi-booking/services/models/restrictiongroupmodel"
            
            )
            
            func RestrictionGroupDelete(arg0 string) ( error) {
                id,_ := strconv.Atoi(arg0)
                log.Println("Calling RestrictionGroupdelete")
            
                return applogic.Delete[database.RestrictionGroup, restrictiongroupmodel.RestrictionGroup](id)
            
            }
