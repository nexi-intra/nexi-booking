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
	"github.com/nexi-intra/nexi-booking/services/endpoints/person"
	"github.com/nexi-intra/nexi-booking/services/models/personmodel"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestPersonupdate(t *testing.T) {
	// transformer v1
	object := personmodel.Person{}

	result, err := person.PersonUpdate(object)
	if err != nil {
		t.Errorf("Error %s", err)
	}
	assert.NotNil(t, result)

}
