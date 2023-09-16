import React, { useState } from 'react'
import './Signup.css'

const Signup = () => {

    const [userRegistration, setUserRegistration] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });
    const [records, setRecords] = useState([])
    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value)

        setUserRegistration({...userRegistration, [name]:value })

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userRegistration),
          });
    
          if (response.ok) {
            console.log('User registered successfully');
            // Clear the form or navigate to another page
          } else {
            console.log('Error registering user');
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      };
  return (
    <>
    <div className='container'>
    <form className='form' action="" onSubmit={handleSubmit}>
        <div className='username'>
            <label htmlFor="username">Full Name</label> <br></br>
            <input className='user_input' type="text" autoComplete='off' placeholder='Enter Name' name='username' id='username'
            value ={userRegistration.username}
            onChange={handleInput} />
        </div>

        <div className='email'>
            <label htmlFor="email">Email</label> <br></br>
            <input className='email_input' type="text" autoComplete='off' placeholder='Enter Email' name='email' id='email' 
            value ={userRegistration.email}
            onChange={handleInput} />
        </div>

        <div className='phone'>
            <label htmlFor="phone">Phone</label> <br></br>
            <input className='phone_input' type="text" autoComplete='off' placeholder='Enter Phone Number' name='phone' id='phone' 
            value ={userRegistration.phone}
            onChange={handleInput} />
        </div>

        <div className='password'>
            <label htmlFor="password">Password</label> <br></br>
            <input className='password_input' type="password" autoComplete='off' placeholder='Enter Password' name='password' id='password' 
            value ={userRegistration.password} 
            onChange={handleInput} />
        </div> <br></br> 
        <button className='btn' type='submit'><h4>Submit</h4></button>
    </form>
    </div>

    </>
  )
}

export default Signup