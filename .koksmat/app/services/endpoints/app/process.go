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
	"encoding/json"
	"fmt"
	"os"
)

type Result struct {
	Data string `json:"data"`
}

func call(args ...string) (string, error) {
	if len(args) < 1 {
		return "", fmt.Errorf("no procedure name provided")
	}

	procName := args[0] //.(string)

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

	// Start a transaction
	tx, err := conn.Begin(context.Background())
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to begin transaction: %v\n", err)
		return "", err
	}

	// Ensure the transaction is committed or rolled back
	defer func() {
		if err != nil {
			tx.Rollback(context.Background())
		} else {
			tx.Commit(context.Background())
		}
	}()
	// Call a stored procedure
	var result string
	err = tx.QueryRow(context.Background(), "CALL my_stored_procedure($1)", 123).Scan(&result)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to call stored procedure: %v\n", err)
		return "", err
	}

	// Wrap the result into a JSON object
	res := Result{Data: result}
	jsonData, err := json.Marshal(res)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to marshal JSON: %v\n", err)
		return "", err
	}

	// Scan the JSON into a string variable
	return string(jsonData), nil

}

func Process(args []string) (*SelectResponse, error) {
	if len(args) < 1 {
		return nil, fmt.Errorf("Expected arguments")
	}

	rows, err := call(args...)
	if err != nil {
		return nil, err
	}

	result := SelectResponse{
		Result: json.RawMessage(rows),
	}

	return &result, nil
}
