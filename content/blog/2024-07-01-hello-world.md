+++
date = "2024-07-01"
title = "Hello, world, again!"
tags = ["hello-world"]
+++

Hello, world, again!

I believe this is round 4 of creating, refactoring, or otherwise restarting my
website and blog; honestly, I've lost count.

I've been wanting to write more, and I've been wanting to have a place to write
that isn't Twitter or some other social media platform. I've tried a few times
to start a blog, but I've always ended up abandoning it for one reason or
another. This time, I'm hoping to stick with it.

So, hello again.

```go
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
```
