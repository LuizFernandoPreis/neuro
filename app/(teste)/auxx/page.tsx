'use client'
import React, { useState, useEffect } from 'react';

type DataItem = {
  id: number;
  nome: string;
  // Definir os outros campos conforme sua tabela
};

const Home: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  return (
    <div>
      <h1>Dados do Banco de Dados</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
