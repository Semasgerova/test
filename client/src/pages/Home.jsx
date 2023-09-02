import React from 'react'
import { useSelector } from 'react-redux'
import HomeCard from '../components/HomeCard';

const Home = () => {
  const {posts} = useSelector(state=>state.posts)
  console.log(posts);

  return (
    <div className='flex flex-wrap items-center m-5'>
      {
        posts.length > 0 && posts?.map((post,i)=>(
          <HomeCard key={i} post={post}/>
        ))
      }
    </div>
  )
}

export default Home