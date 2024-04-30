import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from '../context/DataContext'

const Navbar = () => {

    const { search, setSearch } = useContext(DataContext)

    const liProp = 'w-1/3 h-auto hover:bg-[whitesmoke] hover:text-[black] py-[1.6rem]'
    return (
        <nav className='py-0 flex flex-row flex-wrap justify-between pr-0 pl-4 bg-zinc-700'>
            <div className='w-1/2 py-4 flex flex-row items-center min-w-60'>
                {/* <label htmlFor="search" className='mx-3 text-[white] text-[20px]'>Search Posts</label> */}
                <input 
                    type="text" 
                    id='search'
                    className='mx-3 h-12 w-3/4 p-3 rounded-sm outline-none'
                    value={search}
                    placeholder='Search Posts'
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <ul className='w-1/4 min-w-52 flex flex-row justify-between items-center text-white text-[20px] text-center'>
                <li className={`${liProp}`}>
                    <Link to="/">Home</Link>
                </li>
                <li className={`${liProp}`}>
                    <Link to="/about">About</Link>
                </li>
                <li className={`${liProp}`}>
                    <Link to="/post">Post</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
