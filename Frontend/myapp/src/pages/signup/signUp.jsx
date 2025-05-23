import React, { useState } from 'react'
import PasswordInput from '../../components/Input/passwordInput'
import { Link } from 'react-router-dom'
import { validateEmail } from '../../utils/helper'

function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const hanleSignUp = async (e) => {
    e.preventDefault()

    if (!name) {
      setError("Please enter the name")
      return
    }

    if (!validateEmail(email)) {
      setError("Please Enter a valid email address")
      return
    }

    if (!password) {
      setError("Please enter the password")
      return
    }

    setError("")

  }



  return (
    <>
    <div className='flex items-center justify-center  mt-28'>
      <div className='w-96 border rounded bg-white px-7 py-10 '>
        <form onSubmit={hanleSignUp}>

          <h4 className='text-2xl mb-7'>Sign Up</h4>

          <input
            type="text"
            placeholder='Name'
            className='input-box'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder='Email Address'
            className='input-box'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />

          {error && <p className='text-red-500 text-sm pb-1'>{error}</p>}

          <button type='submit' className='btn-primary cursor-pointer'>SIGN UP</button>
          <p className='text-sm text-center mt-4 '>
            Already have an account?{" "}
            <Link to={"/login"} className='font-medium text-primary underline'>Login</Link>
          </p>

        </form>
      </div>
    </div>
    </>
  )
}

export default SignUp
