var express = require("express")

var app = express()
var routes = express.Router()

app.use(express.json())
app.use("/api/students", routes)

// Get Request
routes.get("/", (req,res)=>{
    res.json(
        {
            message: "This is get request"
        }
    )
})

// Post Request
routes.post("/", (req,res)=>{
    var data = req.body
    res.json(
        {
            message: "This is post request",
            value: data
        }
    )
})

app.listen(3000, ()=>{
    console.log("Application running successfully...")
})