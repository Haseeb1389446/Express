import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function EditTeacher() {
    const [tName, setName] = useState("");
    const [tEmail, setEmail] = useState("");
    const [tAge, setAge] = useState("");
    var params = useParams()

  function SubmitData(event) {
    event.preventDefault();
    var formData = {
      TeacherName: tName,
      TeacherEmail: tEmail,
      TeacherAge: tAge,
    };
    // console.log(formData)

    axios.put(`http://localhost:3000/api/teacher/${params.id}`, formData).then((res) => {
      alert("Teacher updated Successfully...");
      getSpecificData()
    });
  }

  async function getSpecificData() {
   await axios.get(`http://localhost:3000/api/teacher/${params.id}`).then((res)=>{
     setName(res.data.teacher.TeacherName)
     setEmail(res.data.teacher.TeacherEmail)
     setAge(res.data.teacher.TeacherAge)
   })
}

useEffect(()=>{
  getSpecificData()
}, [])

  return (
    <>
      <Link to={"/"}>Show Teachers</Link>
      <br />
      <br />
      <h2>Edit The Teacher</h2>
      <form onSubmit={SubmitData}>
        <input
          type="text"
          value={tName}
          onChange={(i) => {
            setName(i.target.value);
          }}
          placeholder="Enter Name"
        />
        <br />
        <input
          type="text"
          value={tEmail}
          onChange={(i) => {
            setEmail(i.target.value);
          }}
          placeholder="Enter Email"
        />
        <br />
        <input
          type="text"
          value={tAge}
          onChange={(i) => {
            setAge(i.target.value);
          }}
          placeholder="Enter Age"
        />
        <br />
        <input type="submit" value={"Update"} />
      </form>
    </>
  );
}

export default EditTeacher;
