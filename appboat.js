let express = require('express')
let bodyParser = require ('body-parser')
let routeboat = require('./route/routeboat')
let app = express()

app.use(bodyParser.json())

app.use('/', routeboat )

app.listen(3001, ()=>{
    console.log("strat server at port 3001")
})