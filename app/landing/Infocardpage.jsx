// pages/InfoCardPage.js
import React from 'react';
import { FaExchangeAlt, FaWallet, FaCameraRetro } from 'react-icons/fa';

const InfoCard = ({ title, description, icon }) => {
  return (
    <div className="bg-black text-white p-6 rounded-2xl shadow-lg">
      <div className="flex justify-center mb-4">
        <div className="bg-gray-800 p-3 rounded-full">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-orange-500 text-center">{title}</h3>
      <p className="text-md mb-4 text-center">{description}</p>
      <button className="mx-auto block  border border-gray-400  font-semibold px-3 py-3 rounded-3xl mt-20  hover:cursor-pointer">
        Read about us +
      </button>
    </div>
  );
};

const InfoCardPage = () => {
  return (
    <div className=" h-[900px]  sm:h-[400px] bg-white flex  justify-center px-5 sm:px-20 py-8">
      <div className="grid gap-6 md:grid-cols-3">
        <InfoCard 
          title="Trade Desk"
          description="Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform."
          icon={<FaExchangeAlt size={35}  color='#c2410c' />}
        />

        <InfoCard 
          title="CoinFlip ATMs"
          description="We have thousands of ATMs located across the U.S. where you can easily convert cash to crypto."
          icon={<FaCameraRetro size={35} color='#c2410c' />}
        />

        <InfoCard 
          title="CoinFlip Wallet"
          description="Store your growing investments in our non-custodial wallet that gives you access to a full suite of DeFi services in one place."
          icon={<FaWallet size={35} color='#c2410c' />}
        />
      </div>
    </div>
  );
};

export default InfoCardPage;
