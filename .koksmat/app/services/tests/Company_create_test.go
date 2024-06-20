/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma4.1
package tests

import (
	"github.com/nexi-intra/nexi-booking/services/endpoints/company"
	"github.com/nexi-intra/nexi-booking/services/models/companymodel"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestCompanycreate(t *testing.T) {
	// transformer v1
	object := companymodel.Company{}

	result, err := company.CompanyCreate(object)
	if err != nil {
		t.Errorf("Error %s", err)
	}
	assert.NotNil(t, result)

}
