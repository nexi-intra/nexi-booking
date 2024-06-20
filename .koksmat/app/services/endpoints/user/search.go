/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.search.v2
package user

import (
    "log"

    "github.com/nexi-intra/nexi-booking/applogic"
    "github.com/nexi-intra/nexi-booking/database"
    "github.com/nexi-intra/nexi-booking/services/models/usermodel"
    . "github.com/nexi-intra/nexi-booking/utils"
)

func UserSearch(query string) (*Page[usermodel.User], error) {
    log.Println("Calling Usersearch")

    return applogic.Search[database.User, usermodel.User]("searchindex", query, applogic.MapUserOutgoing)

}
