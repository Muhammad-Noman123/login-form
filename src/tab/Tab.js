import React, { useState } from 'react'
import Login from '../Comp/Login/Login'
import Signup from '../Comp/Login/signup/Signup'


const Tab = () => {
    const [value, setValue]= useState(2);
  
  return (
    <div>
      <div>
        <div>Log in</div>
        <div>Sign up</div>
      </div>

      <div>
      <Login />
      </div>
      <div>
        <Signup />
      </div>
       

    </div>
  )
}

export default Tab