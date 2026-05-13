import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar({ darkMode, setDarkMode }) {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 flex items-center space-x-8 px-6 py-2 bg-gray-200 dark:bg-gray-800 shadow-md transition-colors duration-300'>
      <a href="/">
        <img className='w-[50px] cursor-pointer' src={Logo} alt="Logo" />
      </a>
      <Link to="/" className='text-blue-500 text-3xl font-bold'>Movies</Link>
      <Link to="/Watchlist" className='text-blue-500 text-3xl font-bold'>Watchlist</Link>

      <div className='ml-auto flex items-center'>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className='text-2xl p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none'
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <i className="fa-solid fa-sun text-yellow-400"></i>
          ) : (
            <i className="fa-solid fa-moon text-gray-800"></i>
          )}
        </button>
      </div>
    </div>
  )
}

export default Navbar
