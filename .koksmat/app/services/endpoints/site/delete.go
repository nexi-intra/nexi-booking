            /*
            File have been automatically created. To prevent the file from getting overwritten
            set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
            ---
            keep: false
            ---
            */
            //generator:  noma3.delete.v2
            package site
            
            import (
                "log"
                "strconv"
                "github.com/nexi-intra/nexi-booking/applogic"
                "github.com/nexi-intra/nexi-booking/database"
                "github.com/nexi-intra/nexi-booking/services/models/sitemodel"
            
            )
            
            func SiteDelete(arg0 string) ( error) {
                id,_ := strconv.Atoi(arg0)
                log.Println("Calling Sitedelete")
            
                return applogic.Delete[database.Site, sitemodel.Site](id)
            
            }
