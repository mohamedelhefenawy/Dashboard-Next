'use client'
import { motion } from "framer-motion";

export default function LoadingPage() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      {/* Animated Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col items-center gap-4"
      >
        {/* Logo Animation */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg"
          >
            <span className="text-white text-2xl font-bold">7fno</span>
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-cyan-600 font-semibold text-lg"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
}
