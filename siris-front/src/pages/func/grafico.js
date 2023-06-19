import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Scatter } from 'react-chartjs-2'
import React, { useState, useEffect } from 'react'
import './func.css'


ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

function Barchart() {
    
    const chartOptions = {
        maintainAspectRatio: false,
        scales: {
            y: {
            beginAtZero: true,
            },
        },
    };

    function generateRandomData(length, minValue, maxValue) {
        const data = [];
        for (let i = 0; i < length; i++) {
          const x = Math.random() * (maxValue - minValue) + minValue;
          const y = Math.random() * (maxValue - minValue) + minValue;
          data.push({ x, y });
        }
        return data;
      }
      
      const chartData = {
        datasets: [
          {
            label: 'A dataset',
            data: generateRandomData(100, -100, 100),
            backgroundColor: 'rgba(255, 99, 132, 1)',
          },
        ],
      };
      
    return(
        <did className="grafico">
            <Scatter className='grafico123' options={chartOptions} data={chartData} />
        </did>
    )
}

export default Barchart;