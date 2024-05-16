import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function About() {
  const [user, setUser] = useState('ramu');

  if(!user){
    return <Navigate to="/" replace={true}/>
  }

  return (

    <div>About page 
      <br/>

      <button onClick={()=>setUser(null)}>Logout</button>

    </div>
    
  )
}
