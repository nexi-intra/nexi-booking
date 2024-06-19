            /*
            File have been automatically created. To prevent the file from getting overwritten
            set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
            ---
            keep: false
            ---
            */
            //generator:  noma3.delete.v2
            package floor
            
            import (
                "log"
                "strconv"
                "github.com/magicbutton/nexi-booking/applogic"
                "github.com/magicbutton/nexi-booking/database"
                "github.com/magicbutton/nexi-booking/services/models/floormodel"
            
            )
            
            func FloorDelete(arg0 string) ( error) {
                id,_ := strconv.Atoi(arg0)
                log.Println("Calling Floordelete")
            
                return applogic.Delete[database.Floor, floormodel.Floor](id)
            
            }
