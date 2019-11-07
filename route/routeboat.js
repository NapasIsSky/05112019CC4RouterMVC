let express = require('express')
let modelboat = require('../model/modelboat')
let controllerboat = require('../controller/controllerboat')

var router = express.Router()

router.get('/sailors', (req, res) => controllerboat.getData(req,res))
router.get('/addsailor', (req, res) => controllerboat.addData(req,res))
router.get('/updatesailor', (req, res) => controllerboat.updateData(req,res))
router.get('/deletesailorbysid', (req, res) => controllerboat.deleteData(req,res))

router.get('/reserves', (req, res) => controllerboat.getDatar(req,res))
router.get('/addreserve', (req, res) => controllerboat.addDatar(req,res))
router.get('/updatereserve', (req, res) => controllerboat.updateDatar(req,res))
router.get('/deletereservebyid', (req, res) => controllerboat.deleteData(req,res))

module.exports = router