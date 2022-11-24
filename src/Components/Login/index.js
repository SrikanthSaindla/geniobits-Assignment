import React,{useEffect, useState} from 'react'
import AdminLogin from '../AdminLogin'
import UserLogin from '../UserLogin'
import { db } from '../../FirebaseConfig';
import { collection,
     addDoc,
     getDocs
     
   
 } from "firebase/firestore"; 
 
import "./index.css"

const Login = () => {
    const[admin,setAdmin]=useState(false)
    const[user,setUser]=useState([])
    const[admin1,setadmin1]=useState([])

    const collectionRefUser=collection(db,"users")
const collectionRefAdmin=collection(db,"admin")

const getData=()=>{
    let array=[]
  getDocs(collectionRefUser).then((res)=>{
    res.docs.map((each)=> array.push(each.data()))
   setUser(array)
  })
 
   
 }
   

 const getAdmin=()=>{
  let array2=[]
  getDocs(collectionRefAdmin).then((res)=>{
    res.docs.map((each)=> array2.push(each.data()))
   setadmin1(array2)
  })
 }
 useEffect(()=>{
  getData()
  getAdmin()
 },[])
     
    const Activebtn={
      backgroundColor:"green",
      color:'white'
    }
    
  return (
    /* User And Admin Toggle*/
    <center>
          
        <div className='Login-container'  > 
        <div className='user-login-btn'>
        <button onClick={()=>setAdmin(false)} style={admin?null:Activebtn}>User</button>
        <button onClick={()=>setAdmin(true)} style={admin?Activebtn:null}  >Admin</button>
        </div>
      {admin?<AdminLogin  admin1={admin1}/>: <UserLogin  user1={user}/>}
      
      </div>
        
    </center>
  )
}

export default Login
