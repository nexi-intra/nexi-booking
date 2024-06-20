            /*
            File have been automatically created. To prevent the file from getting overwritten
            set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
            ---
            keep: false
            ---
            */
            //generator:  noma3.delete.v2
            package booking
            
            import (
                "log"
                "strconv"
                "github.com/nexi-intra/nexi-booking/applogic"
                "github.com/nexi-intra/nexi-booking/database"
                "github.com/nexi-intra/nexi-booking/services/models/bookingmodel"
            
            )
            
            func BookingDelete(arg0 string) ( error) {
                id,_ := strconv.Atoi(arg0)
                log.Println("Calling Bookingdelete")
            
                return applogic.Delete[database.Booking, bookingmodel.Booking](id)
            
            }
