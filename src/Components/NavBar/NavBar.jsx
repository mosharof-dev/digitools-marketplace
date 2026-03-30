import React from 'react';
import NavBarLogo from '../../assets/DigiTools.png'
import { IoCartOutline } from "react-icons/io5";


const Navbar = () => {
  const navLinks = (
    <>
      <li><a className="hover:text-purple-600 transition">Products</a></li>
      <li><a className="hover:text-purple-600 transition">Features</a></li>
      <li><a className="hover:text-purple-600 transition">Pricing</a></li>
      <li><a className="hover:text-purple-600 transition">Testimonials</a></li>
      <li><a className="hover:text-purple-600 transition">FAQ</a></li>
    </>
  );

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="navbar container mx-auto px-4 lg:px-0">
        
        {/* Mobile Menu (Hamburger) */}
        <div className="navbar-end start w-auto lg:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52 font-medium">
              {navLinks}
            </ul>
          </div>
        </div>

        {/* Logo Section */}
        <div className="flex-1 lg:flex-none">
          <img src={NavBarLogo} alt="DigiTools Logo" className="h-8 lg:h-10 cursor-pointer" />
        </div>

        {/* Desktop Menu (Center) */}
        <div className="navbar-center hidden lg:flex flex-1 justify-center">
          <ul className="menu menu-horizontal px-1 gap-4 font-medium text-gray-600">
            {navLinks}
          </ul>
        </div>

        {/* Action Buttons (Right) */}
        <div className="navbar-end w-auto flex items-center gap-2 lg:gap-4">
          {/* Cart Icon */}
          <div className="indicator mr-2 cursor-pointer">
            <IoCartOutline className="text-2xl lg:text-3xl" />
            <span className="badge badge-sm badge-primary indicator-item border-none text-white">8</span>
          </div>

          {/* Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button className="btn btn-ghost btn-sm lg:btn-md rounded-full font-semibold">Login</button>
            <button className="btn bg-linear-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white border-none btn-sm lg:btn-md rounded-full px-6 shadow-md">
              Get Started
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;