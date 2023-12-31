import React from 'react'
import {CiLogout} from 'react-icons/ci'
import { useDispatch } from 'react-redux'

const Navbar = () => {
   const dispatch = useDispatch()

    const logoutFunc = () =>{
        localStorage.clear()
        window.location = '/auth'
    }

    const openModal = () =>{
        dispatch({type: "MODAL", payload: true})
    }


  return (
    <div className='h-20 bg-gray-100 flex items-center justify-between px-5'>
        <div className='font-bold text-2xl cursor-pointer'>POST SHARE</div>
        <div className='flex items-center space-x-5'>
            <input type="text" placeholder='search' className='p-2 rounded-md outline-none'/>
            <div onClick={openModal} className='w-36 border p-2 rounded-md text-center cursor-pointer hover:bg-gray-200 transition-colors duration-300'>CREATE POST</div>
            <CiLogout onClick={logoutFunc} size={25} className='cursor-pointer hover:text-gray-500 transition-colors duration-300'/>
        </div>
    </div>
  )
}

export default Navbar