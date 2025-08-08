'use client'
import React from 'react'

const Slide = () => {
  return (
    <div>
    <>
        <main className="h-[200px] sm:h-[500px] flex p-10 sm:p-20 bg-white overflow-hidden">
        <div className="relative w-full overflow-hidden whitespace-nowrap">
          <div className="scroll-animation flex  text-5xl sm:text-9xl font-extrabold">
            {/* Repeat the pattern: Solid → Outlined → Solid */}
            {[...Array(6)].map((_, i) => (
              <span key={i} className="flex items-center gap-6 mr-10">
                <span className={i % 2 === 1 ? 'outlined-text' : 'text-black'}>
                  UNRULY DAO
                </span>
              </span>
            ))}
          </div>
          <div className="scroll-animation flex text-5xl sm:text-9xl font-extrabold">
            {/* Repeat the pattern: Solid → Outlined → Solid */}
            {[...Array(6)].map((_, i) => (
              <span key={i} className="flex items-center gap-6 mr-10">
                <span className={i % 2 === 1 ? 'text-black' : 'outlined-text'}>
                  UNRULY DAO
                </span>
              </span>
            ))}
          </div>
        </div>
      </main>

      {/* Animation & stroke style */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scroll-animation {
          animation: scroll 20s linear infinite;
        }

        .outlined-text {
          color: transparent;
          -webkit-text-stroke: 1px #db4d27;
        }
      `}</style>
    </>
    </div>
  )
}

export default Slide
