import React, { useMemo, useState,useRef} from 'react'
import Employ from '../../Data/data'
import "./index.css"
import { Link } from 'react-router-dom'
import { db } from '../../FirebaseConfig'
 
import { collection,
      deleteDoc,
     getDocs,doc
     
 } from "firebase/firestore"
const EmployeeDetails = () => {
   
    const collectionRef=collection(db,"users")
     
  const [employ,setEmploy]=useState([])
  const [details,setDetails]=useState(employ)
  const getData=()=>{
    let array=[]
  getDocs(collectionRef).then((res)=>{
    res.docs.map((each)=> array.push(each.data()))
    setEmploy(array)
  })
 
   
 }
 useMemo(()=>{getData()},[])
 
  const DeleteHandler= async (id) => {
    await deleteDoc(doc(db, "users", id));
  };
  
  return (
    /*Each Employ Details */
    <div style={{display:"flex",alignItem:"center"}}> 
    <div  className='left-list'   >
        <h2 style={{textAlign:"center"}}>Employ List</h2>
      {employ.map((each)=>(
        <div key={each.id} className='Employ_list' onClick={()=>setDetails(each)}>
            <h4>{each.firstname}</h4> 
            <button className='delete-btn' onClick={()=>DeleteHandler(each.id)}>Delete</button>
        </div>
      ))}
      </div>
      <div className='rightCon'>
        <h2>Employ Details</h2>
      <hr/>
        <div div className='Employ_details_admin'> 
       <img src="https://cdn-icons-png.flaticon.com/512/0/93.png"alt=''/>
         {details&& <ul>
          <li>Full Name : {details.firstname} {details.lastname}</li>
          <li>Phone     : {details.number}</li>
          <li>Email     : {details.email}</li>
          </ul>}
       
      </div>
      <Link to='/admin'> <button className='back1'>Back</button></Link>
       
    </div>
      
     
    </div>
  )
}

export default EmployeeDetails
