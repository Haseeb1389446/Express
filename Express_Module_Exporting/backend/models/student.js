var con = require("mongoose")

var stdSchema = con.Schema({
    "StudentName": String,
    "StudentEmail": String,
    "StudentAge": String
})

var stdModel = con.model("Students", stdSchema, "Students")

module.exports = stdModel