import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [search, setSearch] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full p-4 h-[60px] flex justify-between items-center bg-[#141414] z-50">
      {/* Left Section - Logo */}
      <div className="flex items-center text-2xl space-x-6 text-[#4e6b7c]">
        <p>ƑìӀʍᎠҽçҟ</p>
        
      </div>

      {/* Navigation Links for Medium to Large Screens */}
      <div className="hidden sm:flex items-center space-x-8 text-white">
        <Link to="/Home2" className="cursor-pointer hover:text-gray-400 transition-colors">
          Home
        </Link>
        <Link to="/Movies" className="cursor-pointer hover:text-gray-400 transition-colors">
          Movies
        </Link>
        <Link to='/TVSHows' className="cursor-pointer hover:text-gray-400 transition-colors">
          TV Shows
        </Link>
        <Link to='/NewPopular' className="cursor-pointer hover:text-gray-400 transition-colors">
          New & Popular
        </Link>
        <Link to='/MyList' className="cursor-pointer hover:text-gray-400 transition-colors">
          My List
        </Link>

      </div>

      {/* Search Bar for Medium to Large Screens */}
      <div className="relative hidden sm:flex items-center w-[50%] md:w-[30%] lg:w-[25%] max-w-[400px]">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search Movies"
          className="w-full p-2 pl-10 rounded-full bg-[#333] text-white placeholder-gray-400 outline-none"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-3 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          width="20"
          height="20"
        >
          <path
            fillRule="evenodd"
            d="M8 3a5 5 0 0110 0 5 5 0 01-10 0zm0 1a4 4 0 100 8 4 4 0 000-8zm8 7a7 7 0 10-2 5 7 7 0 002-5z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="sm:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Right Section - User Icon */}
      <div className="flex items-center">
        <img
          className="w-[30px] mr-3 cursor-pointer"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="User Icon"
        />
        <Link to="/Login" className="cursor-pointer text-white hover:text-gray-400 transition-colors">
          LOGIN/SIGN UP
        </Link>
      </div>
    

    {/* Dropdown Menu for Mobile */}
    <div
      className={`${
        isMenuOpen ? 'block' : 'hidden'
      } sm:hidden bg-[#141414] absolute top-[60px] left-0 right-0 p-4 flex flex-col space-y-4`}
    >
      <Link
        to="/"
        className="cursor-pointer text-white hover:text-gray-400 transition-colors"
      >
        Home
      </Link>
      <Link
        to="/Movies"
        className="cursor-pointer text-white hover:text-gray-400 transition-colors"
      >
        Movies
      </Link>
      <Link
        to="/TVSHows"
        className="cursor-pointer text-white hover:text-gray-400 transition-colors"
      >
        TV Shows
      </Link>
      <Link
        to='/NewPopular'
        className="cursor-pointer text-white hover:text-gray-400 transition-colors"
      >
        New & Popular
      </Link>
      <Link
        to='/MyList'
        className="cursor-pointer text-white hover:text-gray-400 transition-colors"
      >
        My List
      </Link>
    </div>
    </div>
  );
}

export default Nav;
