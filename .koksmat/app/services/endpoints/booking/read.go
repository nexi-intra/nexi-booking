/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.read.v2
package booking

import (
    "log"
    "strconv"
    "github.com/magicbutton/nexi-booking/applogic"
    "github.com/magicbutton/nexi-booking/database"
    "github.com/magicbutton/nexi-booking/services/models/bookingmodel"

)

func BookingRead(arg0 string) (*bookingmodel.Booking, error) {
    id,_ := strconv.Atoi(arg0)
    log.Println("Calling Bookingread")

    return applogic.Read[database.Booking, bookingmodel.Booking](id, applogic.MapBookingOutgoing)

}
