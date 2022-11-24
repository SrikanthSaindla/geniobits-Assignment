import React from 'react'
import "./index.css"
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
 

 

const AdminDashBoard = () => {
  return (
      
    <div className='Admin-container'>
    
       <div className='side-menu'  >
       <div  >
        <h1> OrangeHRM</h1>
        <ul className='side-menu-list'>
         <li>Admin</li> 
          <li>PIM</li>
          <li>Leave</li>
          <li>Time</li>
          <li>My Info</li>
          <li>DashBoard</li>
        </ul>
        </div>
       </div>
      <div> 
         
      <div className='top-container'>
         
        <div className='userInfo'> 
      <FaUserCircle style={{fontSize:"2.4rem",padding:'.3rem'}}/>
      <span className='username'>Srikanth</span>
       
      </div>
      <div>
       <Link to='/'>  <button className='logout'>Logout</button></Link>
      </div>
       
       
      </div>
      <ul className='list_options'>
        <li>Configuration</li>
       <Link to='Employ'>  <li>Employ List </li></Link>
       <Link to="/addEmploy"> <li>Add Employee</li></Link> 
        <li>Reports</li>
      </ul>
      
       
       
      </div>
       
    </div>
    
  )
}

export default AdminDashBoard
