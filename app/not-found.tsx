'use client'
import {motion} from 'framer-motion'
import Link from 'next/link';
export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen  px-4">
        {/* Animated 404 Number */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-cyan-500 font-extrabold text-9xl"
        >
          404
        </motion.h1>
  
        {/* Animated Message */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 text-lg mt-4"
        >
          {"Oops! The page you're looking for doesn't exist."}
        </motion.p>
  
        {/* Animated Home Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href="/">
            <button className="mt-6 bg-cyan-500  text-white font-semibold px-6 py-2 rounded-3xl shadow-md hover:bg-cyan-600 transition">
              Go Back Home
            </button>
          </Link>
        </motion.div>
      </div>
    );
  }