'use client';
import React from 'react'
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';


const Bottom = () => {
  return (
    <div>

    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        
        <div>
           <Image
                        src="/white.png"
                        alt="UnrulyDAO Logo"
                        width={100}
                        height={40}
                        priority
                        className="h-10 w-auto"
                      />
          <p className="mt-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis.
          </p>
          <div className="mt-6 flex">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-2 rounded-3xl bg-transparent border border-gray-600 focus:outline-none focus:border-orange-500"
            />
            <button className="bg-orange-500 px-4 py-2 rounded-r-md text-white font-semibold hover:bg-orange-600 transition">
              Send
            </button>
          </div>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-500 cursor-pointer">Defi Marketplace</li>
            <li className="hover:text-orange-500 cursor-pointer">BTL Token</li>
            <li className="hover:text-orange-500 cursor-pointer">Exchange</li>
            <li className="hover:text-orange-500 cursor-pointer">Trading API</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Business</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-500 cursor-pointer">White label exchange</li>
            <li className="hover:text-orange-500 cursor-pointer">Crypto-as-a-service</li>
            <li className="hover:text-orange-500 cursor-pointer">NFT Development</li>
            <li className="hover:text-orange-500 cursor-pointer">Advisory Services</li>
            <li className="hover:text-orange-500 cursor-pointer">Token listing</li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mt-8">
        <a href="#" className="border-2 border-dotted border-orange-500 p-2 rounded-full hover:bg-orange-500 hover:text-white transition">
          <FaInstagram size={16} />
        </a>
        <a href="#" className="border-2 border-dotted border-orange-500 p-2 rounded-full hover:bg-orange-500 hover:text-white transition">
          <FaFacebookF size={16} />
        </a>
        <a href="#" className="border-2 border-dotted border-orange-500 p-2 rounded-full hover:bg-orange-500 hover:text-white transition">
          <FaLinkedinIn size={16} />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
        UNRULY DAO, UAB is incorporated in Lithuania, European Union, and is registered with
        Financial Investigation Unit (FNTT)
      </div>
    </footer>
 


    </div>
  )
}

export default Bottom
