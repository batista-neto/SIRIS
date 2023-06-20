import React, { useState, useEffect } from 'react';
import { BsFillCircleFill} from 'react-icons/bs';
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
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function Grafico() {
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);

  function MudarDados() {
    if (chartData !== '') {
        chartData.labels = labels;
        chartData.datasets[0].data = data;
        chartData.update();
    }
  }

  //funcao para atualizar o grafico
  const atualizarGrafico = () => {
    axios.get('http://localhost:4000/data')
      .then(response => {
        const { times, data: apiData } = response.data;
        setLabels(times);
        setData(apiData);
        MudarDados();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    atualizarGrafico();
    const interval = setInterval(atualizarGrafico, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  //criando grafico
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Azimute',
        data,
        options: {
          maintainAspetcRatio: false,
        },
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <div className='grafico'>
      <Line data={chartData} />
    </div>
  );
}

//verificando se ja esta recebendo dados e mostrando mensagem
export const Mensagem = () => {
  const [recebendo, setRecebendo] = useState();
  var tamanho = 0;

  const recebendoDados = () => {
    axios.get('http://localhost:4000/data')
      .then(response => {
        const { data: apiData } = response.data;
        console.log(tamanho, apiData.length)
        if(apiData.length === tamanho) {
          setRecebendo(0)
          tamanho = 0;
        }
        else if(apiData.length > tamanho) {
          setRecebendo(1)
          tamanho = apiData.length
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setRecebendo(3);
      });
  };

  useEffect(() => {
    recebendoDados();
    const interval = setInterval(recebendoDados, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {recebendo === 0 && <div id='recepcao'><BsFillCircleFill />Aguardando Dados</div>}
      {recebendo === 1 && <div id='recebendo'>Recebendo Dados...</div>}
    </div>
  );
};


//exportando componente grafico
export default Grafico;