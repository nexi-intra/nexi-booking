// -------------------------------------------------------------------
// Generated by 365admin-publish/api/20 makeschema.ps1
// -------------------------------------------------------------------
/*
---
title: Get Segments
---
*/
package endpoints

import (
	"context"
	"encoding/json"
	"os"
	"path"

	"github.com/swaggest/usecase"

	"github.com/nexi-intra/nexi-booking/execution"
	"github.com/nexi-intra/nexi-booking/schemas"
	"github.com/nexi-intra/nexi-booking/utils"
)

func UsecasesGetSegmentsPost() usecase.Interactor {
	type Request struct {
	}
	u := usecase.NewInteractor(func(ctx context.Context, input Request, output *schemas.AllSegments) error {

		_, err := execution.ExecutePowerShell("john", "*", "magic-people", "05-usecases", "10-get-segments.ps1", "")
		if err != nil {
			return err
		}

		resultingFile := path.Join(utils.WorkDir("magic-people"), "all-segments.json")
		data, err := os.ReadFile(resultingFile)
		if err != nil {
			return err
		}
		resultObject := schemas.AllSegments{}
		err = json.Unmarshal(data, &resultObject)
		*output = resultObject
		return err

	})
	u.SetTitle("Get Segments")
	// u.SetExpectedErrors(status.InvalidArgument)
	u.SetTags("Use Cases")
	return u
}
