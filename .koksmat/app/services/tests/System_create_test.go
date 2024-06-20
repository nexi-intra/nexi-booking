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
	"github.com/nexi-intra/nexi-booking/services/endpoints/system"
	"github.com/nexi-intra/nexi-booking/services/models/systemmodel"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestSystemcreate(t *testing.T) {
	// transformer v1
	object := systemmodel.System{}

	result, err := system.SystemCreate(object)
	if err != nil {
		t.Errorf("Error %s", err)
	}
	assert.NotNil(t, result)

}
