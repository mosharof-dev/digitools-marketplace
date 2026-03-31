
import React from 'react';
import NavBarLogo from '../../assets/DigiTools.png';
import { IoCartOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi"; 

const Navbar = ({ cart }) => {
  const navLinks = (
    <>
      <li><a className="hover:text-purple-600 transition font-medium">Products</a></li>
      <li><a className="hover:text-purple-600 transition font-medium">Features</a></li>
      <li><a className="hover:text-purple-600 transition font-medium">Pricing</a></li>
      <li><a className="hover:text-purple-600 transition font-medium">Testimonials</a></li>
      <li><a className="hover:text-purple-600 transition font-medium">FAQ</a></li>
    </>
  );

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8 py-3 flex items-center justify-between">
        
        {/* --- Left: Logo --- */}
        <div className="">
          <img src={NavBarLogo} alt="DigiTools Logo" className="h-7 lg:h-9 cursor-pointer" />
        </div>

        {/* --- Center: Desktop Menu (Hidden on Mobile) --- */}
        <ul className="hidden lg:flex items-center gap-8 text-gray-600">
          {navLinks}
        </ul>

        {/* --- Right: Actions (Cart, Login, Menu) --- */}
        <div className="flex items-center gap-3 lg:gap-6">
          
          {/* Cart Icon with Badge */}
          <div className="relative cursor-pointer group">
            <IoCartOutline className="text-2xl lg:text-3xl text-gray-700 group-hover:text-purple-600 transition" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                {cart.length}
              </span>
            )}
          </div>

          {/* Desktop Only Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button className="btn btn-ghost btn-sm rounded-full font-bold text-gray-700">Login</button>
            <button className="btn bg-linear-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white border-none btn-sm lg:btn-md rounded-full px-6 shadow-md transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Dropdown (Hamburger) */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm">
              <HiMenuAlt3 className="text-2xl" />
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-4 shadow-xl bg-white rounded-2xl w-56 border border-gray-50 space-y-2">
              {navLinks}
              <hr className="my-2 border-gray-100" />
              <li><button className="btn btn-primary btn-sm text-white rounded-full w-full">Get Started</button></li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;