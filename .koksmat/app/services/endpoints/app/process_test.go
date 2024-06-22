package app

import (
	"log"
	"testing"
)

func TestProcessNull(t *testing.T) {

	args := []string{}
	err := Process(args)
	if err == nil {
		t.Errorf("Expected error, got nil")
	}

}

func TestProcessUnknown(t *testing.T) {
	log.Println("TestProcessUnknown")

	err := Process("unknown")
	if err == nil {
		t.Errorf("Expected error, got nil")
	}

}
