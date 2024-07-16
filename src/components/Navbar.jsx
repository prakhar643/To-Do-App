//import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-600 text-white py-2'>
        <div className="logo">
            <span className='font bold text-xl mx-8'>iTask</span>
        </div>
        <div className="flex gap-8 mx-9">
            <li className="cursor-pointer hover:font-bold transition-all duration-50">Home</li>
            <li className="cursor-pointer hover:font-bold transition-all duration-50">About</li>
        </div>
    </nav>
  )
}

export default Navbar
