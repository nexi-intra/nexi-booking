/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.update.v2
package company

import (
	"log"

	"github.com/nexi-intra/nexi-booking/applogic"
	"github.com/nexi-intra/nexi-booking/database"
	"github.com/nexi-intra/nexi-booking/services/models/companymodel"
)

func CompanyUpdate(item companymodel.Company) (*companymodel.Company, error) {
	log.Println("Calling Companyupdate")

	return applogic.Update[database.Company, companymodel.Company](item.ID, item, applogic.MapCompanyIncoming, applogic.MapCompanyOutgoing)

}
