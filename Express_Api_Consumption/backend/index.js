var express = require("express")
var con = require("mongoose")
var cors = require("cors")

var app = express()
app.use(express.json())
app.use(cors())

// var stdroute = require("./routes/Student")
// app.use(stdroute)

var teacherroute = require("./routes/teacher.js")
app.use('/api/teacher' ,teacherroute)

con.connect("mongodb://localhost:27017/Api_Consumption").then((res)=>{
    console.log("Database Connected SuccessFully...")
})

app.listen(3000, ()=>{
    console.log("Application running successfully...")
})