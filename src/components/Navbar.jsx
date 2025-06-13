import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 flex items-center space-x-8 px-6 py-2 bg-gray-700 shadow-md'>
      <a href="/">
        <img className='w-[50px] cursor-pointer' src={Logo} alt="Logo" />
      </a>
      <Link to="/" className='text-blue-500 text-3xl font-bold'>Movies</Link>
      <Link to="/Watchlist" className='text-blue-500 text-3xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default Navbar
