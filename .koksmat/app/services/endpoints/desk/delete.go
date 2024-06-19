            /*
            File have been automatically created. To prevent the file from getting overwritten
            set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
            ---
            keep: false
            ---
            */
            //generator:  noma3.delete.v2
            package desk
            
            import (
                "log"
                "strconv"
                "github.com/magicbutton/nexi-booking/applogic"
                "github.com/magicbutton/nexi-booking/database"
                "github.com/magicbutton/nexi-booking/services/models/deskmodel"
            
            )
            
            func DeskDelete(arg0 string) ( error) {
                id,_ := strconv.Atoi(arg0)
                log.Println("Calling Deskdelete")
            
                return applogic.Delete[database.Desk, deskmodel.Desk](id)
            
            }
