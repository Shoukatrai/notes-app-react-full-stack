import React, { useState } from 'react'
import { FaRegEye } from 'react-icons/fa'
import { FaRegEyeSlash } from 'react-icons/fa6'

const PasswordInput = ({ value, onChange, palceholder }) => {
    const [isShowPassword, setIsShowPassword] = useState(false )
    const toogleShowPassword = ()=>{
        setIsShowPassword(!isShowPassword)
    }

    return (
        <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3'>
            <input
                value={value}
                onChange={onChange}
                type={isShowPassword ? "text" : "password"}
                placeholder={palceholder || "password"}
                className='w-full text-sm bg-transparent py-3 mr-3 rounded outline-none'
            />

            {isShowPassword ?
                (<FaRegEye size={22} className='text-primary cursor-pointer'  onClick={()=>toogleShowPassword()}/>)
                : (
                    <FaRegEyeSlash size={22} className='text-slate-400 cursor-pointer' onClick={()=>toogleShowPassword()}/>
                )}

        </div>
    )
}

export default PasswordInput
