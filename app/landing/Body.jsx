import React from 'react';
import Image from 'next/image';

const Body = () => {
  return (
    <section className="bg-white text-white py-12 px-4 sm:px-8 md:px-16">
      {/* Top Full Banner */}
      <div className="rounded-xl bg-neutral-900 p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
        <div>
          <h2 className="text-2xl font-semibold">
            Fans on <span className="font-bold text-white">UNRULY DAO</span>
          </h2>
          <p className="text-gray-400 mt-1">Lorem ipsum</p>
          <div className="mt-6 flex gap-4">
            <button className="bg-orange-600 text-white py-2 px-4 rounded-full hover:bg-orange-700 transition">
              Join the gang +
            </button>
            <button className="border border-gray-500 text-white py-2 px-4 rounded-full hover:bg-gray-700 transition">
              Read about us +
            </button>
          </div>
        </div>
        <p className="text-gray-400 max-w-md">
          The UNRULY DAO platform is like nonething you ever seen. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...
        </p>
      </div>

      {/* Two Column Bottom Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Card */}
        <div className="rounded-xl bg-neutral-900 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold">
              Fans on <span className="font-bold text-white">UNRULY DAO</span>
            </h2>
            <p className="text-gray-400 mt-1">Lorem ipsum</p>
            <p className="text-gray-400 mt-4">
              The UNRULY DAO platform is like nonething you ever seen. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...
            </p>
          </div>
          <div className="mt-6 flex gap-4">
            <button className="bg-orange-600 text-white py-2 px-4 rounded-full hover:bg-orange-700 transition">
              Join the gang +
            </button>
            <button className="border border-gray-500 text-white py-2 px-4 rounded-full hover:bg-gray-700 transition">
              Read about us +
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative rounded-xl bg-neutral-900 p-8 flex flex-col text-center min-h-[300px]">
  <h2 className="text-4xl  text-white mb-4 z-10">Oya drop da beat!</h2>

  {/* Image container at bottom right */}
  <div className="absolute bottom-0 right-4 flex items-end gap-[-50px] overflow-hidden">
  <Image
    src="/btc.png"
    alt="BTC"
    className="w-40 sm:w-52 md:w-40 object-contain"
    height={160}
    width={160}
  />
  <Image
    src="/lite.png"
    alt="Litecoin"
    className="w-40 sm:w-62 md:w-40 object-contain sm:-ml-30 -ml-30"
    height={160}
    width={160}
  />
  <Image
    src="/eth.png"
    alt="ETH"
    className="w-40 sm:w-62 md:w-40 object-contain  sm:-ml-30 -ml-30"
    height={160}
    width={160}
  />
</div>



</div>

      </div>
    </section>
 

    );
};
export default Body;