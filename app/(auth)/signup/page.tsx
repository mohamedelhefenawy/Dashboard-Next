'use client'
import React from 'react'
import {TextField , Button, Checkbox} from '@mui/material'
import Link from 'next/link'
import { motion } from "framer-motion";

export default function page() {

  return (
    <div
    
    className="flex justify-center items-center min-h-screen  px-4">
    <motion.div
      initial={{ opacity: 0, scale: .9, y: -30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
     className="bg-white shadow-xl rounded-xl p-8 sm:w-[400px] w-[280px] mx-auto flex flex-col gap-6">
      {/* Header */}
      <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-cyan-600 font-bold text-3xl">Create Account</h1>
          <p className="text-sm text-gray-500 mt-2">Sign up to get started</p>
        </motion.div>
      <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col gap-3"
        >
          <TextField label="Full Name" variant="outlined" className="w-full" />
          <TextField label="E-mail" variant="outlined" className="w-full" />
          <TextField label="Password" type="password" variant="outlined" className="w-full" />
          <TextField label="Confirm Password" type="password" variant="outlined" className="w-full" />
        </motion.div>

        {/* Terms & Conditions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center gap-2 text-sm text-gray-600"
        >
          <Checkbox />
          <p>
            I agree to the{" "}
            <span className="text-cyan-600 cursor-pointer hover:underline">Terms & Conditions</span>
          </p>
        </motion.div>

        {/* Sign Up Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg transition w-full shadow-md"
            variant="contained"
          >
            Sign Up
          </Button>
        </motion.div>

        {/* Already have an account? */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-sm text-gray-600 text-center"
        >
          {"Already have an account?"}
          <Link href={"/signin"} className="text-cyan-600 ml-2 font-semibold cursor-pointer hover:underline">
            Sign in
          </Link>
        </motion.p>
    </motion.div>
  </div>
  
  )
}
