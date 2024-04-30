import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from '../context/DataContext'
import api from '../apiRequest'
import { format } from 'date-fns'

const EditPost = () => {
    const { id } = useParams()
    const { posts, setPosts, navigate } = useContext(DataContext)
    const post = posts.find(post => post.id.toString() === id)

    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('')

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody])

    const handleEdit = async (id) => {
        if (!editTitle || !editBody) return;
        const datetime = format(new Date(), 'MMMM dd, yyyy pp')
        const updatedPost = { id, title: editTitle, datetime, body: editBody }

        try {
            const resp = await api.put(`/items/${id}`, updatedPost);
            const newPosts = posts.map(post => post.id === id ? { ...resp.data } : post)
            setPosts(newPosts)
            setEditTitle('')
            setEditBody('')
            navigate(`/post/${id}`)
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <main className='grow overflow-y-auto'>
            {post &&
                <form onSubmit={(e) => e.preventDefault()} className='flex flex-col m-4'>
                    <label className='text-[20px]' htmlFor="postTitle">Title:</label>
                    <input
                        id='postTitle'
                        className='w-[100%] border-[2px] border-zinc-800 rounded-sm h-10 my-2 p-2'
                        type='text'
                        required
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                    />

                    <label className='text-[20px] mt-4' htmlFor="postBody">Post:</label>
                    <textarea
                        id="postBody"
                        className='w-[100%] border-[2px] border-zinc-800 rounded-sm my-2 p-2 resize-y'
                        required
                        value={editBody}
                        rows={5}
                        onChange={(e) => setEditBody(e.target.value)}
                    />

                    <button type='submit' onClick={() => handleEdit(post.id)} className='bg-[green] text-[white] hover:bg-[white] hover:text-[green] text-[20px] w-[100%] border-[2px] border-[green] rounded-md my-2 p-2 font-medium active:bg-[green] active:text-[white]'>
                        Save
                    </button>
                </form>
            }
            {!post &&
                <article className='p-4'>
                    <h1 className='text-[25px] font-bold mb-2'>Page Not Found</h1>
                    <p className='text-[15px] my-2'>Well, that's disappointing</p>
                    <p className='text-[20px] my-4 text-[blue] underline'>
                        <Link to='/'>Visit Home Page</Link>
                    </p>
                </article>
            }
        </main>
    )
}

export default EditPost
