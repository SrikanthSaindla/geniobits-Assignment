import React,{useState,useEffect, useMemo} from 'react'
import {v4 as uuidv4} from "uuid"
import { db } from '../../FirebaseConfig';
import { Link } from 'react-router-dom';
 
 import {
collection,
  query,
  onSnapshot,
   addDoc,doc,updateDoc

} from "firebase/firestore"; 

const AddEmploy = () => {
    const collectionRef=collection(db,"users")
    const[data1,setData1]=useState([])
     const [data,setData]=useState({
        firstname:'',
        lastname:'',
        email:'',
        AddressLine1:'',
        number:'',
        password:'',
        Country:''
        
    })
     const{firstname,lastname,email,AddressLine1,number,Country,password }=data

     const changeHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

}
const submitHandler=(e)=>{
    e.preventDefault()
    if ((data.firstname==='') ||(data.email==='') ||(data.password==='')){

  return alert("please fill Required Details")
}
 
 addDoc(collectionRef,{
  id:uuidv4(),
    firstname:data.firstname,
         lastname:data. lastname,
         
        AddressLine1:data.AddressLine1,
        
        email:data.email,
        number:data.number,
        Country:data.Country,
        password:data.password
  }).then(()=>{
    alert("Data added")
  }).catch((e)=>{
    console.log(e.message)
  })
}
 useMemo(()=>{
    const q=query(collection(db,"users"));
    const unsub=   onSnapshot(q,(querySnapshot)=>{
        let ListArray=[]
         
        querySnapshot.forEach((doc)=>{
             ListArray.push({...doc.data(),id:doc.id})
        })
         
        setData1(ListArray)
    })
    return ()=>unsub();
},[])
const a=(data1.filter((each)=> (each.id==='HWrbV72hJjqHnvSptarn')))
console.log(a)
  return (
    /*Add Employ to database */
    <div className='Add-employ'>
        <span>Add Employee</span>
        <hr/>
        <div >
            <form onSubmit={submitHandler}>
                <div className='image-details'> 
                <div style={{width:"30%"}}> 
             <input type='file' />
            </div>
            
              <div style={{display:"flex",gap:"1rem",flexDirection:"column",width:"70%"}}>
                <div>  
             <span>Employee First Name</span><br/>
              <input type="text" name='firstname' value={firstname} onChange={changeHandler}
              placeholder='First Name'/>
              </div>
              <div>  
             <span>Employee Last Name</span><br/>
              <input type="text" name='lastname' value={lastname} onChange={changeHandler}
               placeholder='Last Name'/>
              </div>
                
               <div> 
               <span>Phone</span><br/>
               <input type="number" name='number' value={number} onChange={changeHandler}
               placeholder='+91 1234567890'/>
               </div>
               <div>
                <span>Address</span><br/>
                <input type="text" name='AddressLine1' value={AddressLine1} onChange={changeHandler}
                placeholder='4-57'/>
               </div>
                 
                <div> 
                    <hr/>
                <span>Create Login details</span>
                <input type='checkbox'/>
                </div>
                </div>
                <div style={{display:"flex",gap:".5rem",flexDirection:"column",width:"70%"}}>
        <div>
          <span>Email</span><br/>
          <input type="email"  name='email' value={email} onChange={changeHandler}
           placeholder='Srikanth@gmail.com'/>
        </div>
        <div>
          <span>Password</span><br/>
          <input type='password' value={password} onChange={changeHandler}
          name='password' />
        </div>
        <div>
          <span>Country</span><br/>
          <input type='text'  name='Country' value={Country} onChange={changeHandler}
          />
        </div>
      </div>
                </div>
                 <hr/>
                 <div className='submit-con'> 
                    <span> * Required</span>
                    <div> 
                <button type='reset'>Cancel</button> &nbsp;
                <button type='submit'>Save</button>
                </div>
                  
                </div>
                
             </form>
             
        </div>
       <Link to="/admin">   <button className='back1'>Back</button></Link>
          
      </div>
  )
}

export default AddEmploy
