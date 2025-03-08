import React from 'react';

const GetStarted = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover blur"
      >
        <source src="/videos/scroll_1.mp4" type="video/mp4" />
        
      </video>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-4">
        <h1 className="bg-teal-200 bg-clip-text text-transparent bg-gradient-to-r from-[#82b2df] to-[#b0e7e3] font-smoothing font-primary">
          Detoxify
        </h1>
        <p className='text-white font-secondary text-[clamp(1.5rem,2vw+1rem,3rem)] max-w-[75%]'>
          A mindful way to break free from endless doomscrolling.
        </p>
      </div>
      
    </div>
  );
};

export default GetStarted;
