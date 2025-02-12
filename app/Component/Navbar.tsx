'use client'  // Required for Next.js client-side components

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Anchor, ChartColumnDecreasing, CreditCard, House, Phone, Search, UserRoundCheck, UserRoundPlus } from 'lucide-react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import { Badge } from '@mui/material';
import photo from '../../public/Screenshot 2023-10-23 001138.png' // Importing a sample notification image
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
    const [bell, setBell] = useState(false); // State to toggle notification dropdown
    const [setting , setSetting ]= useState(false)
    // Dummy notification data
    const notification = [
        { 'name': 'mohamed hamed', 'time': '13 min', photo },
        { 'name': 'mohamed mohamed', 'time': '15 min', photo },
    ];

    useEffect(()=>{
        if(setting===true)  setBell(false)
    },[setting])

    return (
        <nav className='flex items-center justify-between'>
            
            {/* Left Section - Breadcrumbs & Mobile Search */}
            <div className='flex flex-col gap-2'>
                {/* Breadcrumb Navigation */}
                <div className='flex gap-2'>
                    <Link href={'/'} className='hover:underline'>Pages</Link>
                    <span>/</span>
                    <Link href={'/'} className='hover:underline'>Dashboard</Link>
                </div>

                {/* Search Box (Visible only on Mobile) */}
                <div className="relative w-40 block md:hidden">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width={18} />
                    <input
                        type="text"
                        placeholder="Type here..."
                        className="text-xs w-full h-9 pl-10 pr-3 rounded-3xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none"
                    />
                </div>
            </div>

            {/* Right Section - Desktop Search & Icons */}
            <div className='flex gap-3 items-center'>

                {/* Search Box (Visible only on Desktop) */}
                <div className="relative w-40 hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width={18} />
                    <input
                        type="text"
                        placeholder="Type here..."
                        className="text-xs w-full h-9 pl-10 pr-3 rounded-3xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none"
                    />
                </div>

                {/* Sign In Link with Icon */}
                <Link href={'/signin'} className='text-gray-500 md:text-base text-xs font-semibold flex'>
                    <PersonIcon className="text-gray-500" sx={{ fontSize: { xs: 18, md: 23 } }} />
                    Sign In
                </Link>

                {/* Settings Icon */}
                <SettingsIcon className='text-gray-500 cursor-pointer ' sx={{  fontSize: { xs: 18, md: 23 },"@media (min-width: 1024px)": { display: "none" }  }} onClick = {()=>setSetting(!setting)} />
                    <SideComponent open={setting} setOpen={setSetting} />
                {/* Notifications Section */}
                <div className='relative'>
                    {/* Notification Icon with Badge */}
                    <Badge badgeContent={2}  sx={{
    "& .MuiBadge-badge": {
      backgroundColor: "#4fd1c5", // Background color
      color: "white", // Text color
    },
  }}>
                        <NotificationsIcon className='text-gray-500 cursor-pointer' onClick={() => setBell(!bell)} sx={{ fontSize: { xs: 18, md: 23 } }} />
                    </Badge>

                    {/* Notification Dropdown (Appears when `bell` is true) */}
                    {bell && (
                        <div className='bg-white shadow-md flex flex-col absolute p-2 w-72 right-5 h-32 overflow-auto rounded-md'>
                            {notification.map((notif, index) => (
                                <div key={index} className='flex gap-5 items-center hover:bg-gray-200 transition duration-300 cursor-pointer rounded-md px-4 py-2'>
                                    <Image src={notif.photo} alt='notification photo' className='rounded-md' width={30} height={20} />
                                    <div className='flex flex-col gap-1'>
                                        <p className='text-xs font-semibold'>New Message {notif.name}</p>
                                        <p className='text-gray-500 text-xs'>{notif.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </nav>
    );
}


interface SideComponentProps {
    open: boolean;
    setOpen: (value: boolean) => void;
}

const SideComponent = ({ open, setOpen }:SideComponentProps) => {
    return (
<aside 
            className={`fixed top-0 right-0 h-screen w-72 sm:w-64 bg-white shadow-lg z-50 transition-transform duration-500 ease-in-out ${
                open ? "translate-x-0" : "translate-x-full"
            } p-6 flex flex-col justify-between`}
        >
            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-bold">
                    Mohamed Hamed Elhefnawy <br />
                    <span className="text-cyan-400">Dashboard</span>
                </h1>
                <CloseIcon className="cursor-pointer" onClick={() => setOpen(false)} />
            </div>
            <hr className="my-4 border-t border-gray-300" />

            {/* Navigation */}
            <nav className="flex flex-col ">
                <SidebarLink href="/" icon={<House />} text="Dashboard" />
                <SidebarLink href="/tabel" icon={<ChartColumnDecreasing />} text="Tables" />
                <SidebarLink href="/add" icon={<CreditCard />} text="Add" />
                <SidebarLink href="/contact" icon={<Phone />} text="Contact" />
                <SidebarLink href="/about" icon={<Anchor />} text="About" />
            </nav>

            <div>
                <h2 className="text-lg font-semibold">Account Pages</h2>
                <hr className="my-4 border-t border-gray-300" />
                <nav className="flex flex-col gap-4">
                    <SidebarLink href="/signin" icon={<UserRoundCheck />} text="Sign In" />
                    <SidebarLink href="/signup" icon={<UserRoundPlus />} text="Sign Up" />
                </nav>
            </div>
        </aside>
    );
};

interface iconsprops{
    href : string;
    icon:React.ReactNode ;
    text:string

}

const SidebarLink = ({ href, icon, text }:iconsprops) => {
    return (
        <Link 
            href={href} 
            className="flex items-center gap-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-3 rounded-3xl transition-all"
        >
            <div className="bg-cyan-300 p-2 rounded-2xl text-white">{icon}</div>
            <span className="font-medium">{text}</span>
        </Link>
    );
};

