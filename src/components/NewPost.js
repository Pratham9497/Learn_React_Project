import React from 'react'
import { useContext, useState } from 'react'
import DataContext from '../context/DataContext'
import { format } from 'date-fns'
import api from '../apiRequest'

const NewPost = () => {
  const {posts, setPosts, navigate} = useContext(DataContext)
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!postTitle || !postBody) return;
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = { id, title: postTitle, datetime, body: postBody }

    try {
      const resp = await api.post('/items', newPost);
      const newPosts = [...posts, resp.data]
      setPosts(newPosts)
      setPostTitle('')
      setPostBody('')
      navigate('/')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <main className='grow overflow-y-auto'>
      <form onSubmit={handleSubmit} className='flex flex-col m-4'>
        <label className='text-[20px]' htmlFor="postTitle">Title:</label>
        <input
          id='postTitle'
          className='w-[100%] border-[2px] border-zinc-800 rounded-sm h-10 my-2 p-2'
          type='text'
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />

        <label className='text-[20px] mt-4' htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          className='w-[100%] border-[2px] border-zinc-800 rounded-sm my-2 p-2 resize-y'
          required
          value={postBody}
          rows={5}
          onChange={(e) => setPostBody(e.target.value)}
        />

        <button type='submit' className='bg-[green] text-[white] hover:bg-[white] hover:text-[green] text-[20px] w-[100%] border-[2px] border-[green] rounded-md my-2 p-2 font-medium active:bg-[lightgreen] active:text-[white]'>
          Submit
        </button>
      </form>
    </main>
  )
}

export default NewPost
