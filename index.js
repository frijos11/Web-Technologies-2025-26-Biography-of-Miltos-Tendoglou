const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const jwt = require('jsonwebtoken')

const fs = require('fs')

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + "/www"))

const port = process.env.port || 4000
const users = { 'admin': 'pass', 'user': 'pass' }

let Distinctions = __dirname + '/www/JsonFiles/Distinctions.json'
let Links = __dirname + '/www/JsonFiles/Links.json'


function isAuthenticated(req, res, next) {
    const token = req.cookies.session

    if (!token)
        return res.status(401).json({ message: "Token wasn't Found" })

    jwt.verify(token, 'secretKey', (err, decodedUser) => {
        req.user = decodedUser
        next()
    })
}

app.post('/login', (req, res) => {
    const username = req.body.userName
    const password = req.body.Password

    if (users[username] === password) {
        jwt.sign({ username: username }, 'secretKey', (err, token) => {
            res.cookie("session", token, { httpOnly: true })
            res.status(200).json({ message: "Logged In" })
        })
    }
    else {
        res.status(401).json({ message: "Failed to Log In" })
    }
})

app.post('/logout', (req, res) => {

    if (req.cookies["session"]) {
        res.clearCookie("session")
        res.status(200).json({ message: "Logged Out" })
    }
    else
        res.status(401).json({ message: "Failed to Log Out (Not logged in)" })
})

app.get('/api/user', isAuthenticated, (req, res) => {
    res.status(200).json({ username: req.user.username })
})

app.get('/api/distinctions', (req, res) => {
    fs.readFile(Distinctions, (err, data) => {
        if (err)
            return res.status(500).json({ message: "Can't Read Distinctions JSON File" })
        res.status(200).json(JSON.parse(data))
    })
})

app.post('/api/distinctions', isAuthenticated, (req, res) => {

    const newDistinction = {
        "Έτος": req.body.year,
        "Πρωτάθλημα": req.body.championship,
        "Θέση": req.body.rank,
        "Μέτρα": req.body.meters
    }
    const category = req.body.category  

    fs.readFile(Distinctions, (err, data) => {
        if (err) 
            return res.status(500).send("Error reading file")

        let json = JSON.parse(data)

        if (json[category])
            json[category].push(newDistinction)
        
        fs.writeFile(Distinctions, JSON.stringify(json, null, 2), (err) => {
            if (err) 
                return res.status(500).send("Error writing file")

            res.status(200).json({ message: "Added Distinctions" })
        })
    })
})

app.put('/api/distinctions', isAuthenticated, (req, res) => {
    const category = req.body.category
    const index = req.body.index 
    
    const updatedDistinction = {
        "Έτος": req.body.year,
        "Πρωτάθλημα": req.body.championship,
        "Θέση": req.body.rank,
        "Μέτρα": req.body.meters
    }

    fs.readFile(Distinctions, (err, data) => {
        if (err) 
            return res.status(500).send("Error reading file")

        let json = JSON.parse(data)

        if (json[category] && json[category][index]) {
            json[category][index] = updatedDistinction

            fs.writeFile(Distinctions, JSON.stringify(json, null, 2), (err) => {
                if (err) 
                    return res.status(500).send("Error writing file")

                res.status(200).json({ message: "Updated Distinction" })
            })
        } 
    })
})

app.get('/api/links', (req, res) => {
    fs.readFile(Links, (err, data) => {
        if (err) 
            return res.status(500).json({ message: "Σφάλμα ανάγνωσης αρχείου Links" })
        res.status(200).json(JSON.parse(data))
    })
})

app.post('/api/links', isAuthenticated, (req, res) => {
    const category = req.body.category
    const url = req.body.url

    const newLinkObject = {
        "Link": `<a href = "${url}" target = "_blank">${url}</a>`
    }

    fs.readFile(Links, (err, data) => {
        if (err) 
            return res.status(500).send("Error reading file")

        let json = JSON.parse(data)

        if (json[category]) {
            json[category].push(newLinkObject)
            
            fs.writeFile(Links, JSON.stringify(json, null, 2), (err) => {
                if (err) 
                    return res.status(500).send("Error writing file")

                res.status(200).json({ message: "Added Link" })
            })
        }
    })
})

app.put('/api/links', isAuthenticated, (req, res) => {
    const category = req.body.category
    const index = req.body.index
    const url = req.body.url

    const updatedLinkObject = {
        "Link": `<a href="${url}" target="_blank">${url}</a>`
    }

    fs.readFile(Links, (err, data) => {
        if (err) 
            return res.status(500).send("Error reading file")

        let json = JSON.parse(data)

        if (json[category] && json[category][index]) {
            json[category][index] = updatedLinkObject

            fs.writeFile(Links, JSON.stringify(json, null, 2), (err) => {
                if (err) 
                    return res.status(500).send("Error writing file")

                res.status(200).json({ message: "Updated Link" })
            })
        }
    })
})

app.listen(port, function () {
    console.log("Server listening at port " + port)
})