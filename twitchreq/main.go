package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"

	"github.com/joho/godotenv"
)

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("error loading .env")
	}
}

func main() {
	fmt.Println("maybe im an asshole")
	r := mux.NewRouter()

	r.HandleFunc("/data/{id}", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Server", "A Go Web Server")
		vars := mux.Vars(r)
		name := vars["id"]
		fmt.Print(name)
		url := fmt.Sprintf("https://api.twitch.tv/kraken/streams/%v?client_id=%v", name, os.Getenv("TWITCH"))
		resp, err := http.Get(url)
		if err != nil {
			log.Printf(err.Error())
		}
		defer resp.Body.Close()
		body, _ := ioutil.ReadAll(resp.Body)

		w.Write(body)

	})
	http.ListenAndServe(":5000", r)
}

// https://api.twitch.tv/kraken/channels/dkane/subscriptions" -- subscriptions
// https://api.twitch.tv/kraken/streams/%v?client_id=%v  -- streamer details
