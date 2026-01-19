import React from 'react'
import { useNavigate } from "react-router-dom";
import Image from '../../assets/image.png'
import Image1 from '../../assets/image copy 2.png'
import ThalaText from './ThalaText';
import India from '../India/India';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
        <div className="min-h-screen flex items-center justify-center gap-30">
      {/* Card */}
      <div
        onClick={() => navigate("/csk")}
        className="slide-up relative w-64 h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transform hover:scale-110 transition-transform duration-300 animate-slideUp md:w-110 h-100"
      >
        <img
          src={Image}
          alt="CSK"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
          <h2 className="text-lg font-extrabold text-yellow-500">CSK</h2>
          <p className="text-sm text-gray-200">
            Click to navigate to the <span className='font-extrabold text-yellow-500'>CSK</span> page
          </p>
        </div>
      </div>
      <div
        onClick={() => navigate("/india")}
        className="slide-up relative w-64 h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transform hover:scale-110 transition-transform duration-300 animate-slideUp md:w-110 h-100"
      >
        <img
          src={Image1}
          alt="CSK"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
          <h2 className="text-lg font-extrabold text-blue-400">INDIA</h2>
          <p className="text-sm text-gray-200">
            Click to navigate to the <span className='font-extrabold text-blue-400'>INDIA</span> page
          </p>
        </div>
      </div>
    </div>
    <ThalaText />
    </div>
  )
}

export default Home;