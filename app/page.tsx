// import Image from "next/image";

import { Earth, ShoppingCart, StickyNote, Wallet } from "lucide-react";
import Cards from "./Component/Cards";
import  { ChartsComponent,TimeSeriesChart } from "./Component/Charts";
import DataTable from "./Component/Client";
import Tablee from "./Component/tabel";

export default function Home() {

   const cards = [
          {title:"Today's Moneys",
          number :'$53,000',
          change:'+55%',
          icon:Wallet
          },
          {
              title:"Today's Users",
              number:'2,300',
              change:'+5%',
              icon: Earth
          },
          {
              title:'New Clients',
              number:'+3,020',
              change:'-14%',
              icon:StickyNote
          },
          {title:'Total Sales',
          number:'$173,000',
          change:'+8%',
          icon: ShoppingCart
          }
      
      ]


  const cardes = [
    {title:"Active Users",
    number :'2500',
    change:'+55%',
    icon:Wallet
    },
    {
        title:"Total Clicks",
        number:'2,300',
        change:'+5%',
        icon: Earth
    },
    {
        title:'Arrived Process',
        number:'+3,020',
        change:'-14%',
        icon:StickyNote
    },
    {title:'Total Sales',
    number:'$173,000',
    change:'-8%',
    icon: ShoppingCart
    }

]
// pie in dashboard
const labels_pie = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
const dataset_pie =[300, 50, 100, 40, 120, 150]

// 

const dataset_line = [
  { x: 'January', y: 65 },
  { x: 'February', y: 59 },
  { x: 'March', y: 80 },
  { x: 'April', y: 81 },
  { x: 'May', y: 56 },
  { x: 'June', y: 55 },
  { x: 'July', y: 72 },
  { x: 'August', y: 88 },
  { x: 'September', y: 65 },
  { x: 'October', y: 45 },
  { x: 'November', y: 78 },
  { x: 'December', y: 90 },
]

  return (
    <div >
      <Cards cards={cards}/>
      <TimeSeriesChart data_line={dataset_line} label="Sales By Month" />
      <div className="flex gap-3 flex-col max-w-full bg-white rounded-xl shadow-xl my-2  px-2 py-4 ">
        <div className="self-center"><ChartsComponent  labels={labels_pie} dataset={dataset_pie} /></div>
        <Cards cards={cardes}/>
      </div>
      <DataTable/>
      <Tablee/>
    </div>
  );
}
