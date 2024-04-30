import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  return (
    <>
        <article className='p-4 mb-4 mt-2'>
        <Link to={`/post/${post.id}`}>
            <h2 className='text-[20px] font-bold'>{post.title}</h2>
            <p className='text-[10px]'>{post.datetime}</p>
        </Link>
        <p className='mt-2'>{post.body.length <= 25 ? post.body : `${post.body.slice(0,25)}...`}</p>
        </article>
        <hr className='h-[2px] bg-[lightgray]'/>
    </>
  )
}

export default Post
