import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-white text-center overflow-hidden p-2 sm:p-20">
      
      <div className="bg-orange-600 w-full h-60 flex mb-8 p-4 sm:p-6 md:p-10 justify-center items-center">
        <h1 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-mono w-full">
          UNRULY DAO
        </h1>
      </div>

      
      <section className="relative z-10 flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-5 bg-white pb-30">
        <div className="md:w-1/2 md:mb-0 md:text-left top-0">
          <h1 className="text-4xl md:text-3xl lg:text-3xl text-black">
            Experience crypto like never before
          </h1>
        </div>

        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-gray-500 mb-6">
            The UNRULY DAO platform is like something you’ve never seen. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...
          </p>

          <div className="flex space-x-4">
            <button className="bg-orange-600 text-white px-6 py-2 rounded-full text-sm hover:bg-orange-700 transition-all">
              Join the gang +
            </button>
            <button className="border border-gray-400 text-black px-6 py-2 rounded-full text-sm hover:bg-gray-100 transition-all">
              Read about us +
            </button>
          </div>
        </div>
      </section>

      
<div className="relative w-full h-[500px]  overflow-hidden bg-white">
  <video
    className="w-full h-[500px]  object-cover"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/music.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>

  <div className="absolute top-0 left-0 w-full h-full flex flex-col z-20 pt-40 p-6">
    <div className="text-white  max-w-2xl">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Feel the Rhythm of the DAO
      </h2>
      <p className="text-sm sm:text-base">
        Dive into the vibes of Unruly DAO where community meets innovation. We’re more than a platform — we’re a movement.
      </p>
    </div>
  </div>
</div>

      </div>
  );
};

export default Hero;
