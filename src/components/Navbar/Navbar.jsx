import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='container p-4 pt-10'>
      <div className="slide-down flex items-center justify-between px-4 py-3 bg-black/40 shadow rounded-full">
        {/* Left - Icon */}
        <div className="flex items-center">
          <span className="text-2xl bg-yellow-300 rounded-full">⚡</span>
        </div>
        {/* Center - Navigation */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
         <div className="flex gap-8 md:gap-10">
            <Link to="/" className="text-white font-medium hover:text-blue-400 transform hover:scale-120 transition-transform duration-300">Home</Link>
            <Link to="/India" className="text-white font-medium hover:text-blue-400 transform hover:scale-120 transition-transform duration-300">India</Link>
            <Link to="/Csk" className="text-white font-medium hover:text-blue-400 transform hover:scale-120 transition-transform duration-300">Csk</Link>
          </div>
        </div>
        {/* Right - Button */}
        <div>
          <Link to="contribution" className="px-3 py-1 bg-blue-600 text-white rounded-full transform hover:scale-110 transition-transform duration-300 hover:bg-blue-700 cursor-pointer">
            Contribution
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;