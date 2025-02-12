'use client'
import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import Image from 'next/image';
import photo_1 from '../../public/p_img1.png'
import photo_2 from '../../public/p_img2.png'
import { X } from 'lucide-react';
import Link from 'next/link';

export default function Clothes() {

    const [del,setDel] = useState(false)



    const data = [
        {
          clothes: "T-Shirt",
          name: "Nike Air",
          photo: photo_1,
          size: ["M", "S", "XL"],
          description: "Comfortable cotton T-shirt",
          price: 29.99,
        },
        {
          clothes: "Jeans",
          name: "Levi's 501",
          photo: photo_2,
          size: ["M", "2XL"],
          description: "Classic straight fit jeans",
          price: 59.99,
        },
        {
            clothes: "T-Shirt",
            name: "Nike Air",
            photo: photo_1,
            size: ["M", "S", "XL"],
            description: "Comfortable cotton T-shirt",
            price: 29.99,
          },
          {
            clothes: "Jeans",
            name: "Levi's 501",
            photo: photo_2,
            size: ["M", "2XL"],
            description: "Classic straight fit jeans",
            price: 59.99,
          },
      ];
      
      return (
        <div className="my-6 bg-white max-w-[90vw] overflow-auto shadow-xl px-6 py-8 rounded-xl">
         {del && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white w-[90%] max-w-md rounded-xl  p-6 relative">
                        {/* Close Button */}
                        <button 
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                            onClick={() => setDel(false)}
                        >
                            <X size={20} />
                        </button>

                        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                            Are you sure you want to delete this item?
                        </h3>

                        <div className="flex justify-center gap-4">
                            <button 
                                className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all"
                                onClick={() => setDel(false)}
                            >
                                Yes, Delete
                            </button>
                            <button 
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-xl hover:bg-gray-400 transition-all"
                                onClick={() => setDel(false)}
                            >
                                No, Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Clothes IN Website</h2>
          <div className="max-h-[400px] rounded-lg border w-full border-gray-200 overflow-hidden">
            <Table className="w-full">
              {/* Table Header */}
              <TableHeader className="bg-gray-100 sticky top-0 shadow-md">
                <TableRow className="text-gray-700">
                  <TableHead className="font-bold">Clothes</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Photo</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Delete</TableHead>
                  <TableHead>Adjustment</TableHead>
                </TableRow>
              </TableHeader>
      
              {/* Table Body */}
              <TableBody>
                {data.map((item, index) => (
                  <TableRow
                    key={index}
                    className="even:bg-gray-50 hover:bg-gray-100 transition-all duration-200"
                  >
                    <TableCell className="font-semibold text-gray-800">{item.clothes}</TableCell>
                    <TableCell>{item.name}</TableCell>
      
                    {/* Photo Column */}
                    <TableCell>
                      <div className="w-14 h-14 overflow-hidden rounded-md border border-gray-300">
                        <Image
                          src={item.photo}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </TableCell>
      
                    {/* Size Column - Styled Badges */}
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {item.size.map((sz, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-blue-100 text-blue-500 text-xs font-medium rounded-xl"
                          >
                            {sz}
                          </span>
                        ))}
                      </div>
                    </TableCell>
      
                    <TableCell className="text-gray-600">{item.description}</TableCell>
                    <TableCell className="text-right font-medium text-gray-900">${item.price.toFixed(2)}</TableCell>
      
                    {/* Delete Button */}
                    <TableCell >
                      <button className="text-red-500 hover:text-red-700 transition-all font-medium px-2 py-1" onClick={()=>setDel(true)}>
                        🗑 Delete
                      </button>
                    </TableCell>
      
                    {/* Adjustment Button */}
                    <TableCell>
                      <Link href={`/adjust`} className="text-blue-500 hover:text-blue-700 transition-all font-medium px-2 py-1">
                        ✏ Adjust
                      </Link >
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      );
    }      