const express = require("express")

const app = express()

//100 - info
//200 - sucess
//300 - redirect
//400 - error (client)
//500 = error (server)


function home(req, res) {
    res.status(200)
    res.send("Home page")
}

function main(req, res) {
    res.status(301)
    res.header("Location", "/")
    res.send()

}

app.get("/", home)
app.get("/main", main)

app.listen(3001, () => console.log("Running on 3001 port"))
