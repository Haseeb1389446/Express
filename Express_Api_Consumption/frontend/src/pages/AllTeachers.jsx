import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function AllTeachers() {

    const [data, setData] = useState([])

    useEffect(()=>{
        getAllData();
    }, [])

    async function getAllData() {
        await axios.get("http://localhost:3000/api/teacher").then((res)=>{
          setData(res.data.teachers)
        })
    }

    async function deleteData(tid) {
        await axios.delete(`http://localhost:3000/api/teacher/${tid}`).then((res)=>{
          alert("Teacher Deleted Successfully...")
        })
    }

  return (
    <>
    <Link to="/addteacher">Add a Teacher</Link>
    <br />
    <br />
    <table border={1}>
        <thead>
            <tr>
                <th>Teacher ID</th>
                <th>Teacher Name</th>
                <th>Teacher Email</th>
                <th>Teacher Age</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item)=>{
                return <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.TeacherName}</td>
                <td>{item.TeacherEmail}</td>
                <td>{item.TeacherAge}</td>
                <td>
                    <Link to={`/editteacher/${item._id}`}>Update</Link>&nbsp;&nbsp;
                    <a onClick={()=>{ deleteData(item._id) }}>Delete</a>
                </td>
            </tr>                
            })}
        </tbody>
    </table>
    </>
  )
}

export default AllTeachers