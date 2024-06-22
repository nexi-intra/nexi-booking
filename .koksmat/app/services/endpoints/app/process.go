/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3
package app

// noma2
import (
	"context"
	"fmt"

	pgx "github.com/jackc/pgx/v4"
)

func call(args ...any) (pgx.Rows, error) {
	if len(args) < 1 {
		return nil, fmt.Errorf("no procedure name provided")
	}

	procName, ok := args[0].(string)
	if !ok {
		return nil, fmt.Errorf("first argument must be the procedure name as a string")
	}

	query := fmt.Sprintf("CALL proc.%s(", procName)
	params := make([]interface{}, len(args)-1)
	placeholders := ""

	for i := range params {
		params[i] = args[i+1]
		if i > 0 {
			placeholders += ", "
		}
		placeholders += fmt.Sprintf("$%d", i+1)
	}
	query += placeholders + ")"

	return conn.Query(context.Background(), query, params...)
}

func Process(args ...any) error {
	if len(args) < 1 {
		return fmt.Errorf("Expected arguments")
	}

	_, err := call(args...)

	return err
}
