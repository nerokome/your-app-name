"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8 py-4">
         
          <a href="/" className="flex items-center">
            <Image
              src="/Group 1.png"
              alt="UnrulyDAO Logo"
              width={100}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </a>
          <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-orange-600">Buy / Sell</a>
            <a href="#" className="hover:text-orange-600">Grow</a>
            <a href="#" className="hover:text-orange-600">Markets</a>
            <a href="#" className="hover:text-orange-600">Business</a>
            <a href="#" className="hover:text-orange-600">Support</a>
          </div>

          <a href="/join">
            <div className="hidden md:block">
            <button className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 text-sm font-medium flex items-center gap-1">
                Whitepapper
            </button>
          </div>

          </a>
          

         
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <Menu size={28} color="black" />
            </button>
          </div>
        </div>
      </nav>

      
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
       
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <Image
            src="/Group 1.png"
            alt="UnrulyDAO Logo"
            width={100}
            height={40}
            className="h-10 w-auto"
          />
          <button onClick={() => setIsOpen(false)} className="text-gray-600 md:hidden">
            <X size={24} />
          </button>
        </div>

        
        <div className="flex flex-col px-6 py-6 space-y-6 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-orange-600" onClick={() => setIsOpen(false)}>Buy / Sell</a>
          <a href="#" className="hover:text-orange-600" onClick={() => setIsOpen(false)}>Grow</a>
          <a href="#" className="hover:text-orange-600" onClick={() => setIsOpen(false)}>Markets</a>
          <a href="#" className="hover:text-orange-600" onClick={() => setIsOpen(false)}>Business</a>
          <a href="#" className="hover:text-orange-600" onClick={() => setIsOpen(false)}>Support</a>
          <a href="/join">
          <button className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 text-sm font-medium">
            whitepaper
          </button>
          
          </a>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
