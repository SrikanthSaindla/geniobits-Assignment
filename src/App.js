import React from 'react'
import UserDashboard from './Components/UserDashBoard'
import AdminDashBoard from './Components/AdminDashBoard'
import EmployeeDetails from './Components/EmployDetails'
 import { Routes, Route } from "react-router-dom"
 import "./App.css"
import Login from './Components/Login'
import AddEmploy from './Components/AddEmploy'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="user" element={ <UserDashboard/> } />
        <Route path="admin" element={ <AdminDashBoard /> } />
        <Route path="admin/Employ" element={ <EmployeeDetails/> } />
         <Route path="/" element={ <Login/> } />
          <Route path="/addEmploy" element={ <AddEmploy/> } />
      </Routes>
    </div>
  )
}

export default App

