import React from 'react';
import { Routes, Route } from "react-router-dom";

import BgImage from './assets/bg.jpg';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contact from './components/contact/Contact';
import India from "./components/India/India";
import Csk from "./components/Ipl/Csk";
import MoreIB from './components/More/MoreIB';
import MoreIW from './components/More/MoreIw';
import MoreIC from './components/More/MoreIC';
import MoreCB from './components/More/MoreCB';
import MoreCW from './components/More/MoreCW';
import MoreCC from './components/More/MoreCC';
import Contibution from './components/Contribution/Contibution';

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const App = () => {
  return (
    <div style={bgStyle}>
      <div className='bg-white/10 backdrop-blur-3xl min-h-screen'>
        {/* Navbar stays visible on all pages */}
        {/* Routes render only the page content */}
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <Contact />
            </>
          } />
          <Route path="/india" element={<India />} />
          <Route path="/csk" element={<Csk />} />
          <Route path="/india/more-india-batting" element={<MoreIB />} />
          <Route path="/india/more-india-keeping" element={<MoreIW />} />
          <Route path="/india/more-india-captain" element={<MoreIC />} />
          <Route path="/csk/more-csk-batting" element={<MoreCB />} />
          <Route path="/csk/more-csk-keeping" element={<MoreCW />} />
          <Route path="/csk/more-csk-captain" element={<MoreCC />} />
          <Route path="/contribution" element={<Contibution />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
