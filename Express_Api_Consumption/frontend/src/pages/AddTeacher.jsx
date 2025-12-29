import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function AddTeacher() {
  const [tName, setName] = useState("");
  const [tEmail, setEmail] = useState("");
  const [tAge, setAge] = useState("");

  function SubmitData(event){
    event.preventDefault();
    var formData = {
      "TeacherName": tName,
      "TeacherEmail": tEmail,
      "TeacherAge": tAge
    }
    // console.log(formData)

    axios.post("http://localhost:3000/api/teacher", formData).then((res)=>{
      alert("Teacher Added Successfully...")
      setName("")
      setEmail("")
      setAge("")
    })
  }

  return (
    <>
    <Link to={"/"}>Show Teachers</Link>
    <br />
    <br />
    <h2>Add a Teacher</h2>
    <form onSubmit={SubmitData}>
        <input type="text" value={tName} onChange={(i)=>{setName(i.target.value)}} placeholder='Enter Name' /><br />
        <input type="text" value={tEmail} onChange={(i)=>{setEmail(i.target.value)}} placeholder='Enter Email' /><br />
        <input type="text" value={tAge} onChange={(i)=>{setAge(i.target.value)}} placeholder='Enter Age' /><br />
        <input type="submit" />
    </form>
    </>
  )
}

export default AddTeacher