var express = require("express")
var con = require("mongoose")

var app = express()
var routes = express.Router()

app.use(express.json())
app.use("/api/students", routes)

var stdSchema = con.Schema({
    "StudentName": String,
    "StudentEmail": String,
    "StudentAge": String
})

var stdModel = con.model("Students", stdSchema, "Students")

// Get Request
routes.get("/", async (req,res)=>{
    var data = await stdModel.find()
    res.json(
        {
            message: "This is get request",
            students: data
        }
    )
})

// Post Request
routes.post("/", async(req,res)=>{
    var data = await stdModel.insertOne(req.body)
    res.json(
        {
            message: "This is post request",
            value: data
        }
    )
})

// Put Request
routes.put("/:sid", async(req,res)=>{
    var stdid = req.params.sid
    var newRecord = await stdModel.findOneAndUpdate({"_id": stdid}, req.body, {new: true})
    res.json(
        {
            message: "This is Put request",
            value: newRecord
        }
    )
})

// Delete Request
routes.delete("/:sid", async(req,res)=>{
    await stdModel.findOneAndDelete({"_id": req.params.sid})
    res.json(
        {
            message: "This is Delete request, Data delete successfully...",
        }
    )
})

con.connect("mongodb://localhost:27017/Express").then((res)=>{
    console.log("Database Connected SuccessFully...")
})
app.listen(3000, ()=>{
    console.log("Application running successfully...")
})