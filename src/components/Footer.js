import React from 'react'
import { useContext } from 'react'
import DataContext from '../context/DataContext'

const Footer = () => {
  const { posts } = useContext(DataContext)
  return (
    <footer className='text-center text-[1.5rem] font-medium text-[white] bg-[blue] p-[1rem]'>
        <p>{`${posts.length} Blog Post${posts.length===1 ? '': 's'}`}</p>
    </footer>
  )
}

export default Footer
