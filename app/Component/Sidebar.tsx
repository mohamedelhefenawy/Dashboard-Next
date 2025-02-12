import React from 'react'
import Link from 'next/link'
import { House , CreditCard  , ChartColumnDecreasing ,Phone, //User//
Anchor,  UserRoundCheck,UserRoundPlus } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className='hidden flex-col gap-4 items-center px-2 py-4 w-64  lg:flex bg-white h-screen fixed shadow-md  top-0 left-0'>
        <Link href={'/'} className='text-xl font-semibold'>Dashboard</Link>
        <hr className='bg-gradient-to-r border-none h-[1px] from-transparent w-full via-gray-400 to-transparent' />

        <Link href={'/'} className='flex gap-2 items-center text-gray-500 focus:text-gray-800 bg-white focus:bg-gray-100 w-full cursor-pointer focus:font-semibold px-4  py-2 text-sm rounded-lg' tabIndex={1}>
        <div className="bg-cyan-300  px-2 py-1 rounded-xl">
            <House className="stroke-white" width={25} />
        </div>
            Dashboard
        </Link>


        <Link href={'/tabel'} className='flex gap-2 items-center text-gray-500 focus:text-gray-800 bg-white focus:bg-gray-100 w-full cursor-pointer focus:font-semibold px-4  py-2 text-sm rounded-lg' tabIndex={1}>
        <div className="bg-cyan-300  px-2 py-1 rounded-xl">
            <ChartColumnDecreasing className="stroke-white" width={25} />
        </div>
            Tabels
        </Link>

        <Link href={'/add'} className='flex gap-2 items-center text-gray-500 focus:text-gray-800 bg-white focus:bg-gray-100 w-full cursor-pointer focus:font-semibold px-4  py-2 text-sm rounded-lg' tabIndex={1}>
        <div className="bg-cyan-300  px-2 py-1 rounded-xl">
            <CreditCard className="stroke-white" width={25} />
        </div>
            Add
        </Link>
        <Link href={'/contact'} className='flex gap-2 items-center text-gray-500 focus:text-gray-800 bg-white focus:bg-gray-100 w-full cursor-pointer focus:font-semibold px-4  py-2 text-sm rounded-lg' tabIndex={1}>
        <div className="bg-cyan-300  px-2 py-1 rounded-xl">
            <Phone className="stroke-white" width={25} />
        </div>
            Contact
        </Link>
        <Link href={'/about'} className='flex gap-2 items-center text-gray-500 focus:text-gray-800 bg-white focus:bg-gray-100 w-full cursor-pointer focus:font-semibold px-4  py-2 text-sm rounded-lg' tabIndex={1}>
        <div className="bg-cyan-300  px-2 py-1 rounded-xl">
            <Anchor className="stroke-white" width={25} />
        </div>
            About
        </Link>

        {/* <div className='flex gap-2 items-center text-gray-500 focus:text-gray-800 bg-white focus:bg-gray-100 w-full cursor-pointer focus:font-semibold px-4  py-2 text-sm rounded-lg' tabIndex={1}>
        <div className="bg-cyan-300  px-2 py-1 rounded-xl">
            <Wrench className="stroke-white" width={25} />
        </div>
            Setting
        </div> */}

        <h1 className='font-bold text-xl'>
            Account Pages
        </h1>
        <hr className='bg-gradient-to-r border-none h-[1px] from-transparent w-full via-gray-400 to-transparent' />

        {/* <div className='flex gap-2 items-center text-gray-500 focus:text-gray-800 bg-white focus:bg-gray-100 w-full cursor-pointer focus:font-semibold px-4  py-2 text-sm rounded-lg' tabIndex={1}>
        <div className="bg-cyan-300  px-2 py-1 rounded-xl">
            <User className="stroke-white" width={25} />
        </div>
            Profile
        </div> */}

        <Link href={'/signin'} className='flex gap-2 items-center text-gray-500 focus:text-gray-800 bg-white focus:bg-gray-100 w-full cursor-pointer focus:font-semibold px-4  py-2 text-sm rounded-lg' tabIndex={1}>
        <div className="bg-cyan-300  px-2 py-1 rounded-xl">
            <UserRoundPlus className="stroke-white" width={25} />
        </div>
            Sign In
        </Link>

        <Link href={'/signup'} className='flex gap-2 items-center text-gray-500 focus:text-gray-800 bg-white focus:bg-gray-100 w-full cursor-pointer focus:font-semibold px-4  py-2 text-sm rounded-lg' tabIndex={1}>
        <div className="bg-cyan-300  px-2 py-1 rounded-xl">
            <UserRoundCheck className="stroke-white" width={25} />
        </div>
            Sign Up
        </Link>




      
    </aside>
  )
}
