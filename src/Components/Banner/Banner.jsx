
import React from 'react';
import bannerPhoto from '../../assets/banner.png';
import { IoPlayOutline } from "react-icons/io5";

const Banner = () => {
  return (
    
    <section className="bg-white overflow-hidden">
   
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 flex flex-col-reverse lg:flex-row items-center justify-between">
        
        {/* --- LEFT SIDE: Content --- */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 mt-10 lg:mt-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full border border-purple-100">
            <span className="flex h-4 w-4 rounded-full bg-purple-600 animate-pulse"></span>
            <p className="text-purple-700 text-xs lg:text-sm font-semibold">
              New: AI-Powered Tools Available
            </p>
          </div>

          {/* Heading -  */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1]">
            Supercharge Your <br className="hidden lg:block" /> 
            <span className="text-slate-800">Digital Workflow</span>
          </h1>

          {/* Description */}
          <p className="text-slate-600 text-lg lg:max-w-lg leading-relaxed mx-auto lg:mx-0">
            Access premium AI tools, design assets, templates, and productivity 
            software—all in one place. Start creating faster today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <button className="bg-linear-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white font-semibold py-3 px-10 rounded-full shadow-lg transition-all active:scale-95 w-full sm:w-auto">
              Explore Products
            </button>
            <button className="border-2 border-purple-100 text-purple-600 hover:bg-purple-50 rounded-full py-3 px-10 flex items-center justify-center gap-2 font-semibold transition-all w-full sm:w-auto">
              <IoPlayOutline className="text-xl" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* --- RIGHT SIDE: Image --- */}
        
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative group max-w-153">
            {/* Background Blur */}
            <div className="absolute -inset-4 bg-purple-100/40 rounded-full blur-3xl -z-10 opacity-70"></div>
            
            <img 
              src={bannerPhoto} 
              alt="Digital Workflow" 
              
              className="w-full h-auto object-contain rounded-2xl drop-shadow-2xl transform transition duration-500 hover:scale-[1.03]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;