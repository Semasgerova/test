import React from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import {RxUpdate} from 'react-icons/rx'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { deletePostAction } from '../redux/actions/post'

const HomeCard = ({post}) => {
    const dispatch = useDispatch()

    const deletePost = (id) =>{
        dispatch(deletePostAction(id))
        // window.location.reload()
        toast("Deletion successful", {
            position: "top-right",
            autoClose: 5000
            });
    }

    const updatePost = (id) =>{
        dispatch({type: 'MODAL',payload: {open: true, updateId: id}})
        toast("Update process successful", {
            position: "top-right",
            autoClose: 5000
            });
    }

  return (
    <div className='relative w-1/4 rounded-md border p-3 bg-gray-100 m-5'>
        <div className='font-bold text-xl'>{post?.title}</div>
        <div className='text-gray-700 text-sm'>{post?.description}</div>
        <div className='flex items-center justify-between mt-4'>
            <span className='text-xs text-gray-500'>{post?.user}</span>
            <span className='text-xs text-gray-500'>{(post?.date)?.substring(0,10)}</span>
        </div>
        <div className='absolute top-3 right-3 flex items-center space-x-3'>
            <RxUpdate onClick={()=>updatePost(post._id)}  size={20} className='text-green-500 cursor-pointer'/>
            <AiOutlineDelete onClick={()=>deletePost(post._id)} size={22} className='text-red-500 cursor-pointer'/>
        </div>
    </div>
  )
}

export default HomeCard