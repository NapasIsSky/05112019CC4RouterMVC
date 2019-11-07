
var modelboat = require('../model/modelboat')
const query = require('../model/modelboat')  

module.exports.getData = (req, res) => {
    let querysg = "SELECT * FROM sailors"
    query.db.query(querysg, (err, results) => {
        if(err){
            console.log(err)
            console.log("something worng!")
        }else{
            res.send(results)
        }
    })  
}

module.exports.addData = (req, res) => {
    let querysa = `INSERT INTO sailors(sid,sname,rating,age) value ("${req.query.sid}","${req.query.sname}","${req.query.rating}","${req.query.age}")`
    query.db.query(querysa, (err, results) => {
        if(err){
            console.log(err)
            console.log("something worng!")
        }else{
            res.send(results)
        }
    })  
}

module.exports.updateData = (req, res) => {
    let querysu = `UPDATE sailors SET sname = \"${req.query.sname}\", rating = \"${req.query.rating}\", age = \"${req.query.age}\" WHERE sid = \"${req.query.sid}\"`
    query.db.query(querysu, (err, results) => {
    if(err){
        console.log(err)
        console.log("something worng!")
    }else{
        res.send(results)
    }
})
}

module.exports.deleteData = (req, res) => {
    let querysd = `DELETE FROM sailors WHERE sid = ${req.query.sid}`&&`DELETE FROM reserves WHERE sid = ${req.query.sid}`
    query.db.query(querysd, (err, results) => {
    if(err){
        console.log(err)
        console.log("something worng!")
    }else{
        res.send(results)
    }
})
}

module.exports.getDatar = (req, res) => {
    let queryrg = "SELECT * FROM reserves"
    query.db.query(queryrg, (err, results) => {
        if(err){
            console.log(err)
            console.log("something worng!")
        }else{
            res.send(results)
        }
    })  
}

module.exports.addDatar = (req, res) => {
    let queryra = `INSERT INTO reserves(sid,bid,day) values ("${req.query.sid}","${req.query.bid}","${req.query.day}")`
    query.db.query(queryra, (err, results) => {
        if(err){
            console.log(err)
            console.log("something worng!")
        }else{
            res.send(results)
        }
    })  
}

module.exports.updateDatar = (req, res) => {
    let queryru = `UPDATE reserves SET bid = \"${req.query.bid}\", day = \"${req.query.day}\" WHERE sid = \"${req.query.sid}\"`
    query.db.query(queryru, (err, results) => {
    if(err){
        console.log(err)
        console.log("something worng!")
    }else{
        res.send(results)
    }
})
}

