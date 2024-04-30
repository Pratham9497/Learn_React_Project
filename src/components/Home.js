import React from 'react'
import Feed from './Feed'
import { useContext } from 'react'
import DataContext from '../context/DataContext'

const Home = () => {
  const { searchResults, fetchError, isLoading } = useContext(DataContext)
  return (
    <main className='grow overflow-y-auto'>
      {isLoading && <p className='text-center p-4 text-[20px]'>Loading Items...</p>}
        {!isLoading && (fetchError ? <p className='text-center p-4 text-[red]'>{fetchError}</p> :
        (searchResults.length ? <Feed posts = {searchResults}/> : <p className='text-center p-4'>No Posts Yet</p>))}
    </main>
  )
}

export default Home
