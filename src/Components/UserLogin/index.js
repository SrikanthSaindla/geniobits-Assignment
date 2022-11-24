import React, {useRef} from 'react'
 
import { useNavigate} from "react-router-dom";
 
import "./index.css"
//import { db } from '../../FirebaseConfig';
 
 
 

const UserLogin = (props) => {
    let navigate = useNavigate();
  const email=useRef('')
  const password=useRef('')
 //const [auth,setAuth]=useState(false)
 
const {user1}=props
 
const UserFormHandler=(e)=>{
 e.preventDefault()
  
  
 const email1=email.current.value
 const password1=password.current.value
 if(email1===''|| password1==='') return alert("Enter Details")
  const res=user1.filter((each)=>each.email===email1)
   if(res.length===0) return alert("no user found")
   if(res[0].password!==password1) return  alert('invalid Password')

    return navigate('user')
     


 
  
  
}
  return (
     
      /*user Login  */
    <div className='user-Login'>
       <form className='user-form' onSubmit={UserFormHandler}>
        <span>User Login</span>
        
        <input type="email" ref={email}placeholder='Enter Email'/><br/>
        <input type="password" ref={password} placeholder='Enter Password'/><br/>
          <button type='submit'  >Login</button>  
       </form>
       <div>
        
      </div>
    </div>
   
     
  )
}

export default UserLogin
