package app

import (
	"context"
	"log"
	"os"
	"testing"

	pgx "github.com/jackc/pgx/v4"
	"github.com/spf13/viper"

	"github.com/nexi-intra/nexi-booking/utils"
)

func TestMain(m *testing.M) {
	cwd, _ := os.Getwd()

	utils.MakeEnvFile(cwd)
	utils.Setup("./.env")
	// magicapp.OpenDatabase()

	dsn := viper.GetString("POSTGRES_DB")
	var err error
	conn, err = pgx.Connect(context.Background(), dsn)
	if err != nil {
		log.Fatal(err)
	}

	code := m.Run()
	defer conn.Close(context.Background())

	os.Exit(code)
}
