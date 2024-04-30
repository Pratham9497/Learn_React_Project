import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from '../context/DataContext'
import api from '../apiRequest'

const PostDesc = () => {
    const { posts, setPosts, navigate } = useContext(DataContext)
    const { id } = useParams()
    const post = posts.find(post => post.id.toString() === id)

    const handleDelete = async (id) => {
        try {
            await api.delete(`/items/${id}`)
            const newPosts = posts.filter(post => post.id !== id)
            setPosts(newPosts)
            navigate('/')
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <main className='grow overflow-y-auto'>
            <article className='p-4'>
                {post && (
                    <>
                        <h1 className='text-[25px] font-bold mb-2'>{post.title}</h1>
                        <p className='text-[15px] my-2'>{post.datetime}</p>
                        <p className='text-[20px] my-4 text-justify'>{post.body}</p>
                        <Link to={`/edit/${id}`}><button className='p-2 w-[8rem] block mt-4 text-[18px] bg-[blue] border-[blue] border-[2px] text-[white] rounded-md hover:text-[blue] hover:bg-[white] font-medium'>Edit Post</button></Link>

                        <button onClick={() => handleDelete(post.id)} className='p-2 w-[8rem] block mt-4 text-[18px] bg-[red] border-[red] border-[2px] text-[white] rounded-md hover:text-[red] hover:bg-[white] font-medium'>
                            Delete Post
                        </button>
                    </>
                )}
                {!post && (
                    <>
                        <h1 className='text-[25px] font-bold mb-2'>Post Not Found</h1>
                        <p className='text-[15px] my-2'>Well, that's disappointing</p>
                        <p className='text-[20px] my-4 text-[blue] underline'>
                            <Link to='/'>Visit Home Page</Link>
                        </p>
                    </>
                )}
            </article>
        </main>
    )
}

export default PostDesc
