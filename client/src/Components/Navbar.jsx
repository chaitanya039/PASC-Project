import { useState } from 'react';
import pasc2 from '../Images/Pasc 2.png';
import banner from '../Images/OutstandingWebsiteBanner.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='w-full flex justify-between items-center px-4 mt-1'>
      {/* Left section */}
      <div className="flex items-center">
        {/* First logo */}
        <div>
          <img src={pasc2} alt="Logo" className="h-8" />
        </div>

        {/* Hamburger menu icon for mobile */}
        <div className="md:hidden ml-auto">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Navbar content */}
      <div className={`md:flex md:items-center ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className='flex flex-col md:flex-row md:justify-center md:space-x-4'>
          <li style={{ margin: '0.8125rem' }}> 
            <a href='#'>Home</a>
          </li>
          <li style={{ margin: '0.8125rem' }}> 
            <a href='#'>What We Do</a>
          </li>
          <li style={{ margin: '0.8125rem' }}> 
            <a href='#'>Our Team</a>
          </li>
          <li style={{ margin: '0.8125rem' }}>
            <a href='#'>Who We Are</a>
          </li>
          <li style={{ margin: '0.8125rem' }}>
            <a href='#'>Join PASC</a>
          </li>
          <li style={{ margin: '0.8125rem' }}> 
            <a href='#'>Achievements</a>
          </li>
          <li style={{ margin: '0.8125rem' }}> 
            <a href='#'>Glimpses</a>
          </li>
          <li style={{ margin: '0.8125rem' }}> 
            <a href='#'>Blogs</a>
          </li>
        </ul>
      </div>

      {/* Right section */}
      <div>
        <img src={banner} alt="Logo10" className="h-8" />
      </div>

    </nav>
  );
};

export default Navbar;
