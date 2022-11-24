import React, {   useMemo, useState } from 'react'
import Employ from '../../Data/data'
import "./index.css"
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { db } from '../../FirebaseConfig';
import { collection,
     addDoc,
     getDocs
    ,doc,
    updateDoc,
    deleteDoc
 } from "firebase/firestore"; 
const UserDashboard = () => {
   const collectionRef=collection(db,"users")
   const[users,setUsers]=useState([])

  const getData=async()=>{
  await getDocs(collectionRef).then((res)=>{
    res.docs.map((each)=>setUsers(each.data()))
  })
 }
 useMemo(()=>{
  getData()
 })
 
  return (
    /*User DashBoard */
    <div className='user-dashBoard'>

      <div className='user-container'>

      <div className='top-container'>

        <div className='userInfo'> 
      <FaUserCircle style={{fontSize:"2.4rem",padding:'.3rem'}}/>
      <span className='username'>{users.firstname}</span>
      </div>
      <div> 
      <Link to='/'>  <button className='logout'>Logout</button></Link>
       </div>
       
      </div>
       
     <div className='userList'> 
        <ul>
          <img src="https://cdn-icons-png.flaticon.com/512/0/93.png"alt=''/>
          <li>{users.firstname}</li>
          <li>{users. AddressLine1}</li>
          <li>{users.number}</li>
        </ul>
        </div>
      </div>
       
        
      
    </div>
  )
}

export default UserDashboard
