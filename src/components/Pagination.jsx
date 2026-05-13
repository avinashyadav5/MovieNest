import React from 'react'

function Pagination({handlePrev, handleNext, pageNo}) {
  return (
    <div className='bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-white p-4 mt-8 flex justify-center transition-colors duration-300'>
      <div onClick={handlePrev} className='px-8 hover:cursor-pointer hover:scale-120 duration-300'><i className="fa-solid fa-arrow-left"></i></div>
      <div className='font-bold text-lg'>{pageNo}</div>
      <div onClick={handleNext} className='px-8 hover:cursor-pointer hover:scale-120 duration-300'><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination
