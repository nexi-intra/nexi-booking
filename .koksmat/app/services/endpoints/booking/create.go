/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.create.v2
package booking

import (
    "log"
   
    "github.com/nexi-intra/nexi-booking/applogic"
    "github.com/nexi-intra/nexi-booking/database"
    "github.com/nexi-intra/nexi-booking/services/models/bookingmodel"

)

func BookingCreate(item bookingmodel.Booking) (*bookingmodel.Booking, error) {
    log.Println("Calling Bookingcreate")

    return applogic.Create[database.Booking, bookingmodel.Booking](item, applogic.MapBookingIncoming, applogic.MapBookingOutgoing)

}
