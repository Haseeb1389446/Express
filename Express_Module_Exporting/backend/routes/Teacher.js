const teacherModel = require("../models/teacher")
var express = require("express")
var app = express()

var routes = express.Router()
app.use("/api/teachers", routes)

// Get Request
routes.get("/", async (req,res)=>{
    var data = await teacherModel.find()
    res.json(
        {
            message: "This is get request",
            teachers: data
        }
    )
})

// Post Request
routes.post("/", async(req,res)=>{
    var data = await teacherModel.insertOne(req.body)
    res.json(
        {
            message: "This is post request",
            value: data
        }
    )
})

// Put Request
routes.put("/:tid", async(req,res)=>{
    var tid = req.params.tid
    var newRecord = await teacherModel.findOneAndUpdate({"_id": tid}, req.body, {new: true})
    res.json(
        {
            message: "This is Put request",
            value: newRecord
        }
    )
})

// Delete Request
routes.delete("/:tid", async(req,res)=>{
    await teacherModel.findOneAndDelete({"_id": req.params.tid})
    res.json(
        {
            message: "This is Delete request, Data delete successfully...",
        }
    )
})

module.exports = routes