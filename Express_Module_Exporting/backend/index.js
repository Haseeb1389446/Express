var express = require("express")
var app = express()
app.use(express.json())

var teacherroute = require("./routes/Student")
var stdroute = require("./routes/Teacher")

var con = require("mongoose")
app.use(stdroute)
app.use(teacherroute)

con.connect("mongodb://localhost:27017/Express").then((res)=>{
    console.log("Database Connected SuccessFully...")
})
app.listen(3000, ()=>{
    console.log("Application running successfully...")
})