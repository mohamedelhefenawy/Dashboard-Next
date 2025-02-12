import React from 'react'
import { ChartsComponent } from '../Component/Charts'
import Tablee from '../Component/tabel'
import Clothes from '../Component/Clothes'

export default function page() {

    const labels_pie = ['Girls Round Neck Cotton Top' ,
         'Boy Round Neck Pure Cotton T-shirt',
        'Women Round Neck',
    'Men Round Neck Pure']

    const Best_dataset_pie =[100,200,300,400]

    // Worst
    const Worst_dataset_pie = [10,5 , 3 ,1]






  return (
    <div className='mx-auto w-full'>
    <div className='flex flex-col  lg:flex-row items-center justify-between bg-white  max-w-full rounded-xl shadow-lg my-2  px-2 py-4'>
      <div className="flex gap-3 my-2 flex-col items-center max-w-full  ">
        <h1 className='text-3xl font-bold  text-green-400'>Best Sales</h1>
        <ChartsComponent  labels={labels_pie} dataset={Best_dataset_pie} />
      </div>

      <div className="flex gap-3 my-2 mt-8 flex-col items-center  ">
        <h1 className='text-3xl font-bold  text-red-400'>Worst Sales</h1>
        <ChartsComponent  labels={labels_pie} dataset={Worst_dataset_pie} />
      </div>
    </div>
    <Tablee/>
    <Clothes/>



    </div>
  )
}
