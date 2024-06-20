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
	"github.com/nexi-intra/nexi-booking/services/endpoints/relation"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestRelationsearch(t *testing.T) {

	result, err := relation.RelationSearch(".")
	if err != nil {
		t.Errorf("Error %s", err)
	}
	assert.NotNil(t, result)

}
