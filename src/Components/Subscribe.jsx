import React from 'react'
import { AuthContext } from './Context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Subscribe = () => {
    let {fireLogout,logout}=useContext(AuthContext)
     let navigate = useNavigate()

const handleLogout = async ()=>{
   
    try{
        await fireLogout ()
          logout()
          navigate("/")
    }
    catch(err){
        console.log(err)
    }
  
}


  return (
    <div>
      <button style={{marginTop:"300px"}} onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Subscribe
