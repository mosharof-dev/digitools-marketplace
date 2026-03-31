import React from 'react';
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-slate-400 py-12 lg:py-16">
      
      
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Top Part: Footer Columns */}
        <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-5 gap-12  mb-16">
          
          {/* Brand Info  */}
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-[28px] font-bold text-white tracking-tight">DigiTools</h2>
            <p className="max-w-xs leading-relaxed text-slate-400 text-sm lg:text-base">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Column 1: Product */}
          <div>
            <h4 className="text-white font-semibold mb-5">Product</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-purple-400 cursor-pointer transition">Features</li>
              <li className="hover:text-purple-400 cursor-pointer transition">Pricing</li>
              <li className="hover:text-purple-400 cursor-pointer transition">Templates</li>
              <li className="hover:text-purple-400 cursor-pointer transition">Integrations</li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-white font-semibold mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-purple-400 cursor-pointer transition">About</li>
              <li className="hover:text-purple-400 cursor-pointer transition">Blog</li>
              <li className="hover:text-purple-400 cursor-pointer transition">Careers</li>
              <li className="hover:text-purple-400 cursor-pointer transition">Press</li>
            </ul>
          </div>

          {/* Column 3: Resources & Socials */}
          <div className="space-y-8 flex flex-col items-start">
            <div>
              <h4 className="text-white font-semibold mb-5">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-purple-400 cursor-pointer transition">Documentation</li>
                <li className="hover:text-purple-400 cursor-pointer transition">Help Center</li>
              </ul>
            </div>
            
            {/* Social Links - */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Social Links</h4>
              <div className="flex items-center gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black hover:bg-purple-500 hover:text-white transition">
                  <FaInstagram size={16} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black hover:bg-purple-500 hover:text-white transition">
                  <FaFacebookF size={16} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black hover:bg-purple-500 hover:text-white transition">
                  <FaXTwitter size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Part:  */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px]">
          <p>© 2026 Digitools. All rights reserved.</p>
          
          {/* Privacy/Terms pushed to the far right */}
          <div className="flex items-center gap-6 font-medium">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;