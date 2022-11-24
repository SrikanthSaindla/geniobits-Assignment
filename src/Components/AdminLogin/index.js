import React,{useRef} from 'react'
import "./index.css"
//import { Redirect } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const AdminLogin = (props) => {
  const {admin1}=props
    let navigate = useNavigate();
    const email=useRef('')
  const password=useRef('')

  const adminHandler=(e)=>{
    e.preventDefault()
    const email1=email.current.value
 const password1=password.current.value
 if(email1===''|| password1==='') return alert("Enter Details")
  const res=admin1.filter((each)=>each.email===email1)
   if(res.length===0) return alert("no user found")
   if(res[0].password!==password1) return  alert('invalid Password')
     navigate("admin")
  }
  
 
  return (
      /*Admin Login  */
    <div className='Admin-Login'>
       <form className='admin-form' onSubmit={adminHandler}>
        <span>Admin Login</span>
         
        <input type="email" ref={email}placeholder='Ex:srikanth@gmail.com'/><br/>
        <input type="password" ref={password} placeholder='Enter Password:123456'/><br/>
        <button type='submit'>Login</button> 
       </form>
    </div>
    
  )
}

export default AdminLogin
