'use client'
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartOptions,
  Chart
} from 'chart.js';

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);


interface Datapoint{
  x:string,
  y:number
}

interface TimeSeriesProps{
  data_line : Datapoint[]
  ,label:string
}
// TimeSeriesChart Component
const TimeSeriesChart = ({data_line , label}:TimeSeriesProps) => {
  // Data for the months
  const data = {
  datasets: [
    {
      label: label,
      data: data_line,
      fill: true,
      backgroundColor: (context: { chart: Chart }) => {
        const chart = context.chart;
        const ctx = chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(75, 192, 192, 0.5)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        return gradient;
      },
      borderColor: 'rgba(75, 192, 192, 1)',
      tension: 0.4, // Smoother curve
      pointBackgroundColor: 'rgba(255, 99, 132, 1)', // Stylish points
      pointBorderColor: '#fff',
      pointHoverRadius: 6,
      pointRadius: 4,
      borderWidth: 3, // Thicker line
    },
  ],
};

  // Chart options
  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'category',
        ticks: {
          autoSkip: true,
          color: '#666',
          font: {
            weight: 'bold',
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#666',
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.3)',
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Sales Data by Month',
        color: '#333',
        font: {
          size: 18,
          weight: 'bold',
        },
      },
      legend: {
        labels: {
          color: '#333',
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        titleFont: {
          size: 16,
        },
        bodyFont: {
          size: 14,
        },
      },
    },
  };

  return (
    <div className="p-4 rounded-2xl shadow-lg bg-white w-full max-w-2xl mx-auto">
      <div className="relative h-[400px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

interface props{
  labels: string[],
  dataset:number[]
}

const ChartsComponent = ({labels,dataset}:props) => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: dataset,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 2,
        hoverOffset: 10, // Increases hover effect
      },
    ],
  };

  const options:ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14,
            weight: 'bold',
          },
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleFont: {
          size: 16,
        },
        bodyFont: {
          size: 14,
        },
        padding: 10,
        displayColors: false,
      },
    },
  };

  return (
   


      
        <div style={{ width: '330px', margin: '0 auto' }}>
          <Doughnut data={data} options={options}  />
        </div>
      

 
  
  );
};

export { TimeSeriesChart, ChartsComponent };
