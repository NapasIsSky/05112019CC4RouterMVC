const express = require('express')
const appboats = express()
const mysql = require("mysql")

const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: 'kiekie13322',
    database: 'boatrental',
})

db.connect()

    module.exports = query = {
        db: db
    }




                            
