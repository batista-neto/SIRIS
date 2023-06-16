import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import React, { useState, useEffect } from 'react'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Legend)


function Barchart() {
    
    const [chartData, setChartData] = useState({
        datasets: [],
    })
    
    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["jhon", "kevin", "geroge", "michael", "oreo"],
            datasets: [{
                label: "whom st let the dog out",
                data: [12, 55, 34, 120, 720],
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.4)",
            }]
        });
        setChartOptions({
            responsive: true,
            plugins: {
                legend: {
                    position: "top"
                },
            }
        });
    });

    return(
        <did>
            <Bar className="grafico" options={chartOptions} data={chartData} />
        </did>
    )
}

export default Barchart;