import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../layout/PageContainer';
import { Navbar } from '../layout/Navbar';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Navbar />
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 left-10 md:left-20 w-16 h-16 md:w-24 md:h-24 bg-accent border-4 border-black shadow-neubrutalism"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-32 right-10 md:right-32 w-12 h-12 md:w-20 md:h-20 bg-secondary border-4 border-black shadow-neubrutalism"
          animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.div
          className="absolute top-40 right-16 md:right-40 w-10 h-10 md:w-16 md:h-16 bg-cyan-400 border-4 border-black shadow-neubrutalism-sm"
          animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* Main content */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'circOut' }}
          className="text-center z-10 flex flex-col items-center"
        >
          {/* 404 SVG illustration */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'circOut' }}
            className="mb-8"
          >
            <img
              src="/404.svg"
              alt="404"
              className="w-64 md:w-96 h-auto block dark:hidden"
            />
            <img
              src="/404-dark.svg"
              alt="404"
              className="w-64 md:w-96 h-auto hidden dark:block"
            />
          </motion.div>

          {/* Glitch-style heading */}
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-8xl font-black font-sans tracking-tighter mb-4"
          >
            PAGE{' '}
            <span className="text-transparent text-stroke-2 bg-clip-text">
              NOT
            </span>{' '}
            FOUND
          </motion.h1>

          {/* Description box */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-black text-white p-4 inline-block transform rotate-1 shadow-neubrutalism-lg border-2 border-white md:border-transparent mb-10"
          >
            <p className="font-mono text-base md:text-xl">
              Looks like you wandered off the grid.
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => navigate('/')}
              className="flex items-center justify-center gap-3 bg-white border-4 border-black px-8 py-4 font-mono font-bold text-lg shadow-neubrutalism hover:bg-secondary hover:translate-y-[2px] hover:shadow-neubrutalism-sm transition-all"
            >
              <Home size={22} />
              Go Home
            </button>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center gap-3 bg-accent text-white border-4 border-black px-8 py-4 font-mono font-bold text-lg shadow-neubrutalism hover:translate-y-[2px] hover:shadow-neubrutalism-sm transition-all"
            >
              <ArrowLeft size={22} />
              Go Back
            </button>
          </motion.div>
        </motion.div>
      </section>
    </PageContainer>
  );
};
