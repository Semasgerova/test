import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { createPostAction, updatePostAction } from '../redux/actions/post'

const Modal = () => {
  const [postData, setPostData] = useState({user: "", title: "", description: ""})
  const dispatch = useDispatch()
  const {modal} = useSelector(state=>state.modal)

  console.log(modal);

  const onChangeFunc = (e) =>{
     setPostData({...postData, [e.target.name]: e.target.value})
  }

  const closeFunc = () =>{
    dispatch({type: 'MODAL',payload: false})
  }

  const postCreate = () =>{
    if(modal?.updateId){
      dispatch(updatePostAction(modal?.updateId,postData))
    }else{
      dispatch(createPostAction(postData))
    }
   
    dispatch({type: 'MODAL',payload: false})
    toast("Add operation successful", {
      position: "top-right",
      autoClose: 5000
      });
  }

  return (
    <div className='w-full h-sreen bg-opacity-80 bg-black fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center'>
      <div className='bg-white w-1/3 p-2 rounded-md'>
        <div className='flex items-center justify-between'>
        <h1 className='font-bold text-2xl'>{modal?.updateId ?' POST UPDATE' : 'POST SHARE'}</h1>
          <AiOutlineClose onClick={closeFunc} size={25} className='cursor-pointer hover:text-gray-500 transition-colors duration-300'/>
        </div>
        <div className='my-4 flex flex-col space-y-3'>
          <input value={postData.user} name='user' onChange={onChangeFunc} className='input-style' type="text" placeholder='User' />
          <input value={postData.title} name='title' onChange={onChangeFunc} className='input-style' type="text" placeholder='Title' />
          <input value={postData.description} name='description' onChange={onChangeFunc} className='input-style' type="text" placeholder='Description' />
        </div>
        <div onClick={postCreate} className='w-full p-2 text-center bg-gray-200 cursor-pointer hover:bg-gray-400 transition-colors duration-300'>{modal?.updateId ? 'UPDATE' : 'SHARE'}</div>
      </div>
    </div>
  )
}

export default Modal