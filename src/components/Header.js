import React from 'react'
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'
import useWindowSize from '../hooks/useWindowSize'

const Header = () => {
  const { width } = useWindowSize()
  return (
    <header className='flex flex-row justify-between bg-[blue]'>
        <h1 className='text-[white] p-4 text-[30px] font-bold'>React JS Blog</h1>
        <span className='text-[50px] p-4'>{width < 768 ? <FaMobileAlt /> : width < 992 ? <FaTabletAlt /> : <FaLaptop />}
        </span>
    </header>
  )
}

export default Header
