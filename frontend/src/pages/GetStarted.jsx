import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GetStarted = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  const fadeInOnly = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3, ease: 'easeOut' } }
  };
  
  const fadeInLeftVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 2.5, ease: 'easeOut' } }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

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

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-6">
        <motion.div
          ref={ref}
          variants={fadeInLeftVariant}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col items-center space-y-6"
        >
          <h1 className="bg-teal-200 bg-clip-text text-transparent bg-gradient-to-r from-[#82b2df] to-[#b0e7e3] font-smoothing font-primary">
            Detoxify
          </h1>
          
          <p className='text-white font-secondary text-[clamp(1.5rem,2vw+1rem,3rem)] max-w-[75%]'>
            A mindful way to break free from endless doomscrolling.
          </p>
        </motion.div>

        <motion.button
          onClick={handleClick}
          variants={fadeInOnly}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-white font-secondary text-[clamp(0.5rem,1vw+0.5rem,2rem)] max-w-[25%] bg-[#4892d6] px-6 py-3 
            rounded-2xl cursor-pointer shadow-lg transition duration-300 ease-in-out
            hover:bg-[#82b2df] hover:shadow-2xl hover:shadow-[#82b2df]/50 hover:scale-105
            focus:outline-none focus:ring-4 focus:ring-[#82b2df]/50"
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default GetStarted;
