import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='grow overflow-y-auto'>
      <article className='p-4'>
        <h1 className='text-[25px] font-bold mb-2'>Page Not Found</h1>
        <p className='text-[15px] my-2'>Well, that's disappointing</p>
        <p className='text-[20px] my-4 text-[blue] underline'>
            <Link to='/'>Visit Home Page</Link>
        </p>
      </article>
    </main>
  )
}

export default Missing
