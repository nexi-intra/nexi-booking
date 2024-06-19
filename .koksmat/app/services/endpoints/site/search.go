/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.search.v2
package site

import (
    "log"

    "github.com/magicbutton/nexi-booking/applogic"
    "github.com/magicbutton/nexi-booking/database"
    "github.com/magicbutton/nexi-booking/services/models/sitemodel"
    . "github.com/magicbutton/nexi-booking/utils"
)

func SiteSearch(query string) (*Page[sitemodel.Site], error) {
    log.Println("Calling Sitesearch")

    return applogic.Search[database.Site, sitemodel.Site]("searchindex", query, applogic.MapSiteOutgoing)

}
