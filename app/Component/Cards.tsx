import React from 'react'

import { LucideIcon } from 'lucide-react';

interface Card {
    title: string;
    number: string;
    change: string;
    icon: LucideIcon;  
  }
  
  // Define the props interface for the Cards component
  interface Props {
    cards: Card[];
  }

export default function Cards({cards}:Props) {


  return (
    <div className='flex items-center justify-between  flex-wrap my-4 '>
        {
            cards.map((card,index)=>(
                <div key={index} className='flex flex-col gap-3 xl:w-[22%] md:w-[45%] w-full my-2 xl:my-0  mx-2 h-fit px-4 py-2 bg-white shadow-md hover:shadow-xl duration-300 rounded-xl '>
                    <h1 className='text-sm text-gray-400 font-semibold'>
                        {card.title}
                    </h1>
                    <div >
                        <div className='flex text-start justify-between '>
                            <p className='flex items-center gap-1 font-bold'>
                                {card.number}  <span className={card.change.includes('-')?"text-red-400":'text-green-500'}>{card.change}</span>
                            </p>
                            <div className='bg-cyan-400 px-2 py-2 rounded-lg'>
                            <card.icon className='text-white '/>
                            </div>
                        </div>


                    </div>

                </div>
            ))
        }
      
    </div>
  )
}
