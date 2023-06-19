import React, { useState, useEffect } from 'react';
import { BsFillCircleFill} from 'react-icons/bs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  defaults,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function Barchart() {
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(); // Chama a função para buscar os dados inicialmente
    const interval = setInterval(fetchData, 500); // Chama a função a cada 1 segundo

    return () => {
      clearInterval(interval);
       // Limpa o intervalo quando o componente é desmontado
    };
  }, []);

  const fetchData = () => {
    fetch('http://localhost:4000/data')
      .then(response => response.json())
      .then(data => {
        const { times, data: apiData } = data;
        setLabels(times);
        setData(apiData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      
  };

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Azimute',
        data,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };


  return <Line data={chartData} />;
}

export const Mensagem = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(); // Chama a função para buscar os dados inicialmente
    const interval = setInterval(fetchData, 500); // Chama a função a cada 1 segundo

    return () => {
      clearInterval(interval);
       // Limpa o intervalo quando o componente é desmontado
    };
  }, []);

  const fetchData = () => {
    fetch('http://localhost:4000/data')
      .then(response => response.json())
      .then(data => {
        const {data: apiData } = data;
        setData(apiData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  return (
    <div>
      {data.length === 0 && <div id='recepcao'><BsFillCircleFill />Aguardando Dados</div>}
      {data.length !== 0 && <div id='recebendo'>Recebendo Dados...</div>}
    </div>
  );
};

export default Barchart;