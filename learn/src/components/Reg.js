import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
 import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Reg = () => {

    const [username, setUsername] = useState('');
    const [password  , setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message , setMessage] = useState('')

    function handlereg(e){
        e.preventDefault()
        const formdata = {username , password , email}
        console.log(formdata)

        fetch("/api/Register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formdata)
          }).then((res)=>{return res.json()}).then((data)=>{
            console.log(data)
            if(data.status === 201 ){
              toast.success(data.message)
                  setMessage(data.message)
                  // navigate("/Login")

          }else{

              setMessage(data.message)
              toast.error(data.message)
          }
          })
       

          
        }

  return (
    <div className='container'>
    <div className='row'>
        <div className='col-md-7'></div>
        <div className='col-md-5'>
           
            <form onSubmit={(e)=>{handlereg(e)}}>
              
            <p id="regheading" >Registration Form</p>
            
                <MDBInput value={username} onChange={(e) => setUsername(e.target.value)} label='Username' id='controlledValue' type='text' className='mt-3'  required/>
                <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} label='Password' id='controlledValue' type='password' className='mt-3'  required />
                <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} label='Email' id='controlledValue' type='email'  className='mt-3'  required />
                <button className='form-control mt-2 btn btn-primary'>Register</button>
               <Link to="/Login"><button className='form-control mt-2 btn btn-dark'>Login</button></Link> 
    
    
            </form>
        </div>
    </div>

</div>
  )
}

export default Reg