/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.search.v2
package booking

import (
    "log"

    "github.com/magicbutton/nexi-booking/applogic"
    "github.com/magicbutton/nexi-booking/database"
    "github.com/magicbutton/nexi-booking/services/models/bookingmodel"
    . "github.com/magicbutton/nexi-booking/utils"
)

func BookingSearch(query string) (*Page[bookingmodel.Booking], error) {
    log.Println("Calling Bookingsearch")

    return applogic.Search[database.Booking, bookingmodel.Booking]("searchindex", query, applogic.MapBookingOutgoing)

}
