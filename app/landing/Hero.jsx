'use client'
import React, { useRef, useEffect, useState } from 'react';

const Hero = () => {
  const videoRef = useRef(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 } 
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-center overflow-hidden p-2 sm:p-20">
      {/* Header */}
      <div className="bg-orange-600 w-full h-50 sm:h-60 flex mb-8 p-4 sm:p-6 md:p-10 justify-center items-center">
        <h1 className="text-black text-5xl sm:text-6xl md:text-6xl lg:text-8xl font-bold sm:mt-0 mt-8 w-full">
          UNRULY DAO
        </h1>
      </div>

      {/* Text Section */}
      <section className="relative z-10 flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-5 bg-white pb-30">
        <div className="md:w-1/2 md:mb-0 md:text-left top-0">
          <h1 className="text-4xl md:text-3xl lg:text-3xl text-black">
            Bet on talent, Earn with community
          </h1>
        </div>

        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-gray-500 mb-6">
            Join the first Web3-powered label where fans don't just listen — they invest. Turn your support into real ownership and rewards.
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

      {/* Lazy Loading Video */}
      <div ref={videoRef} className="relative w-full h-[500px] overflow-hidden bg-white">
        {isVideoVisible && (
          <video
            className="w-full h-[500px] object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="none" // Don't preload until needed
          >
            <source src="/music.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>

        <div className="absolute top-0 left-0 w-full h-full flex flex-col z-20 pt-40 p-6">
          <div className="text-white max-w-2xl">
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
