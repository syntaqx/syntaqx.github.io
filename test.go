package main

import (
	"fmt"
	"io"
	"net"
	"net/http"
	"os"
)

func HelloHandler(w http.ResponseWriter, req *http.Request) {
	io.WriteString(w, "Hello, world!\n")
}

func main() {
	port, ok := os.LookupEnv("PORT")
	if !ok {
		port = "8080"
	}

	http.HandleFunc("/", HelloHandler)

	srv := &http.Server{
		Addr:    net.JoinHostPort("", port),
		Handler: http.DefaultServeMux,
	}

	fmt.Printf("server listening at %s\n", srv.Addr)
	if err := srv.ListenAndServe(); err != nil {
		if err != http.ErrServerClosed {
			fmt.Printf("srv.ListenAndServe: %v\n", err.Error())
		}
	}
}
