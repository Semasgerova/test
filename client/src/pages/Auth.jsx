import React from 'react'
import { useState } from 'react'
import { loginAction, registerAction } from '../redux/actions/auth'
import {useDispatch} from 'react-redux'

const Auth = () => {
    const [signUp, setSignUp] = useState(true)
    const [authData, setAuthData] = useState({username: "", email: "", password: ""})
    const dispatch = useDispatch()

    const onChangeFunc = (e) =>{
          setAuthData({...authData, [e.target.name] : e.target.value})
    }

    const authFunc = () =>{
      if(signUp){
       dispatch(registerAction(authData))
      }else{
        dispatch(loginAction(authData))
      }
    }

    console.log(authData);


  return (
    <div className='w-full h-screen bg-gray-100 flex items-center justify-center fixed top-0 bottom-0 left-0 right-0 z-50'>
        <div className='w-1/3 bg-white p-3'>
              <h1 className='text-2xl text-gray-700 font-bold text-center'>{signUp ? "REGISTER" : "LOGIN"}</h1>
              <div className='flex flex-col space-y-3 my-5'>
                {signUp && <input value={authData.username} name="username" onChange={onChangeFunc} type="text" placeholder='Username' className='input-style'/>}
                <input value={authData.email} name="email" onChange={onChangeFunc} type="text" placeholder='Email' className='input-style'/>
                <input value={authData.password} name="password" onChange={onChangeFunc} type="text" placeholder='Password' className='input-style'/>
              </div>
              <div className='text-red-500 text-xs cursor-pointer mb-4'>
                {signUp ? <span onClick={()=>setSignUp(false)}>Have you logged in before?</span> : <span onClick={()=>setSignUp(true)}>Click to register</span>}
              </div>
              <div onClick={authFunc} className='w-full p-2 text-center bg-gray-700 hover:bg-gray-900 text-white rounded-md cursor-pointer transition-colors duration-300'>{signUp ? "Sign Up" : "Login"}</div>
        </div>
    </div>
  )
}

export default Auth