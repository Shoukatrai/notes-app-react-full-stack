import React, { useState } from 'react'
import PasswordInput from '../../components/Input/passwordInput'
import { Link } from 'react-router-dom'
import { validateEmail } from '../../utils/helper'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const hanleLogin = async(e)=>{
    e.preventDefault()
    if(!validateEmail(email)){
      setError("Please Enter a valid email address")
      return
    }

    if(!password){
      setError("Please enter the password")
      return
    }

    setError("")

    //Login Api 
  }

  return (
    <div className='flex items-center justify-center  mt-28'>
      <div className='w-96 border rounded bg-white px-7 py-10 '>
        <form onSubmit={hanleLogin}>

          <h4 className='text-2xl mb-7'>Login</h4>

          <input
            type="text"
            placeholder='Email'
            className='input-box'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />

          {error && <p className='text-red-500 text-sm pb-1'>{error}</p>}

          <button type='submit' className='btn-primary cursor-pointer'>LOGIN</button>
          <p className='text-sm text-center mt-4 '>
            Not Registered yet?{" "}
            <Link to={"/signup"} className='font-medium text-primary underline'>Create an account</Link>
          </p>
        
        </form>
      </div>
    </div>
  )
}

export default Login