'use client'
import { motion } from "framer-motion";
import { TextField, Button, Switch } from "@mui/material";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <motion.div
        initial={{ opacity: 0, scale: .9, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-xl rounded-xl p-8 sm:w-[400px] w-[280px] mx-auto flex flex-col gap-6"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-cyan-600 font-bold text-3xl">Welcome Back</h1>
          <p className="text-sm text-gray-500 mt-2">Enter your credentials to sign in</p>
        </motion.div>

        {/* Input Fields */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <TextField label="E-mail" variant="outlined" className="w-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <TextField label="Password" type="password" variant="outlined" className="w-full" />
        </motion.div>

        {/* Remember Me & Forgot Password */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-between items-center text-sm text-gray-600"
        >
          <label className="flex items-center gap-2 cursor-pointer">
            <Switch className="text-cyan-500" />
            <span>Remember me</span>
          </label>
          <p className="cursor-pointer hover:text-cyan-600 transition">Forgot password?</p>
        </motion.div>

        {/* Sign In Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg transition w-full shadow-md"
            variant="contained"
          >
            Sign In
          </Button>
        </motion.div>

        {/* Register Option */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-sm text-gray-600 text-center"
        >
          {"Don't have an account?"}
          <Link href={'/signup'} className="text-cyan-600 ml-2 font-semibold cursor-pointer hover:underline">
            Sign up
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}
