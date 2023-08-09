const express = require("express")
const path = require("path")

const app = express()

app.use(express.urlencoded())

const login = (req, res) => {
    const filePath = path.join(__dirname, "pages", "login.html")
    res.sendFile(filePath)
}

const checkLogin = (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const errors = []

    if (email == "") {
        errors.push("Email is empty")
    }if (password == "") {
        errors.push("Password is empty")
    }

    if (errors.length != 0) {
        res.send(errors)
        return
    }

    console.log(req.body)
    res.send()
}


const register = (req, res) => {
    const filePath = path.join(__dirname, "pages", "register.html")
    res.sendFile(filePath)
}

const checkRegister = (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    const errors = []

    if (name == "") {
        errors.push("Name is empty")
    }if (email == "") {
        errors.push("Email is empty")
    }if (password == "") {
        errors.push("Password is empty")
    }

    if (errors.length != 0) {
        res.send(errors)
        return
    }

    console.log(req.body)
    res.status(303)
    res.header("Location", "/login")
    res.send()
}

app.get("/login", login)
app.post("/login", checkLogin)

app.get("/register", register)
app.post("/register", checkRegister)

app.listen(3001, () => console.log("running on port 3001"))