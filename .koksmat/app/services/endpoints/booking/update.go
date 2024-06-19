/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.update.v2
package booking

import (
    "log"

    "github.com/magicbutton/nexi-booking/applogic"
    "github.com/magicbutton/nexi-booking/database"
    "github.com/magicbutton/nexi-booking/services/models/bookingmodel"

)

func BookingUpdate(item bookingmodel.Booking) (*bookingmodel.Booking, error) {
    log.Println("Calling Bookingupdate")

    return applogic.Update[database.Booking, bookingmodel.Booking](item.ID,item, applogic.MapBookingIncoming, applogic.MapBookingOutgoing)

}
