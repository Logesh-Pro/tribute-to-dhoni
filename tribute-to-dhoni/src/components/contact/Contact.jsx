import React from 'react'
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
        <div className='bg-[#343A40] text-white gap-10'>
            <div className='flex flex-col flex-4 container px-55 py-4 space-y-1 font-light font-size'>
                {/* Home → React Router */}
                <Link to="/" className="cursor-pointer hover:text-yellow-400 transition-colors">
                Home</Link>
                {/* GitHub → External link */}
                <a href="https://github.com/logesh-pro" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-yellow-400 transition-colors">
                GitHub</a>
                {/* Email → mailto */}
                <a href="logeshbalaji2007@gmail.com" className="cursor-pointer hover:text-yellow-400 transition-colors">
                Email</a>
                {/* Location (text only) */}
                <p className="text-gray-300">
                    Chennai, TamilNadu
                </p>
            </div>
        </div>
    </div>
  )
}

export default Contact