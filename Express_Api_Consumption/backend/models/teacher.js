var con = require("mongoose")

var teacherSchema = con.Schema({
    "TeacherName": String,
    "TeacherEmail": String,
    "TeacherAge": String
})

var teacherModel = con.model("Teachers", teacherSchema, "Teachers")

module.exports = teacherModel