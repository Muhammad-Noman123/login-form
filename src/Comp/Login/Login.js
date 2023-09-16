import React, { useState } from 'react'
import './Login.css'

const Login = ({handleChange}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = () => {
    
    

    const newEntry = {email:email, password:password} 
    setAllEntry([...allEntry, newEntry])

  }




  return (
    <div className='container'>
        <form className='main' action="" onSubmit={submitForm}>
        
            <div className='email'>
            <label htmlFor="email">Email</label><br></br>
            <input className='input_e' type="text" name='email' id='email' autoComplete='off' placeholder='Enter your email'
             value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            </div> <br></br>

            <div className='password'>
            <label htmlFor="password">Password</label><br></br>
            <input className='input_pass' type="password" name='password' id='password' autoComplete='off' placeholder='Enter Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            </div> <br></br>


           <div className='forgot_password'> Forgot Password? <a href='#' onClick={()=>handleChange("event",1)} >Signup</a> </div> <br></br>
            <button className='btn' type='submit'>Login </button>
        </form>
    </div>
  )
}

export default Login