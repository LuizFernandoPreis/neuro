"use client"

import { useEffect } from "react";

export default function TaskForm(): JSX.Element {
  useEffect(() => {
    const form = document.getElementById('taskForm');
    const handleSubmit = async (event: Event) => {
      event.preventDefault();
      
      const nome = (document.getElementById('nome') as HTMLInputElement).value;
      const descricao = (document.getElementById('descricao') as HTMLInputElement).value;
      const data = (document.getElementById('data') as HTMLInputElement).value;
      const status = (document.getElementById('status') as HTMLInputElement).checked ? 'Concluido' : 'Em progresso';
      
      try {
        const response = await fetch('https://www.neuronavigator.x10.mx/php/createTask.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ nome, descricao, data, status })
        });
        
        const dataResponse = await response.json();
        alert('Tarefa cadastrada com sucesso!');
        console.log(dataResponse);
      } catch (error) {
        console.error('Erro ao cadastrar a tarefa:', error);
        alert('Erro ao cadastrar a tarefa. Verifique o console para mais informações.');
      }
    };
    
    form?.addEventListener('submit', handleSubmit);
    
    return () => {
      form?.removeEventListener('submit', handleSubmit);
    };
  }, []);
  
  return (
    <div className="container mt-5 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Tarefas</h1>
      <form id="taskForm">
        <div className="mb-3">
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">Nome:</label>
          <input type="text" className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2" id="nome" required />
        </div>
        <div className="mb-3">
          <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-2">Descrição:</label>
          <input type="text" className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2" id="descricao" required />
        </div>
        <div className="mb-3">
          <label htmlFor="data" className="block text-sm font-medium text-gray-700 mb-2">Data:</label>
          <input type="date" className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2" id="data" required />
        </div>
        <div className="mb-3 flex items-center">
          <input type="checkbox" className="form-check-input h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mr-2" id="status" />
          <label className="form-check-label text-sm text-gray-700" htmlFor="status">Concluído</label>
        </div>
        <button type="submit" className="btn bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700">Cadastrar</button>
      </form>
    </div>
  );
}
