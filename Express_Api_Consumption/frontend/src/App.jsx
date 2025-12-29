import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllTeachers from './pages/AllTeachers'
import AddTeacher from './pages/AddTeacher'
import EditTeacher from './pages/EditTeacher'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<AllTeachers></AllTeachers>}></Route>
        <Route path='/addteacher' element={<AddTeacher></AddTeacher>}></Route>
        <Route path='/editteacher/:id' element={<EditTeacher></EditTeacher>}></Route>
        <Route path='/deleteteacher/:id' element={<EditTeacher></EditTeacher>}></Route>
      </Routes>
    </>
  )
}

export default App
