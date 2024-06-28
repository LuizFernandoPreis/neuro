"use client"
import { useEffect, useState } from "react";

interface Task {
  id: number;
  nome: string;
  descricao: string;
  data: string;
  status: string;
}

export default function GetTask(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch('https://www.neuronavigator.x10.mx/php/index.php');
        if (!response.ok) {
          throw new Error('Erro ao buscar as tarefas');
        }
        const tasksData: Task[] = await response.json();
        setTasks(tasksData);
      } catch (error) {
        console.error('Erro ao buscar as tarefas:', error);
        alert('Erro ao buscar as tarefas. Verifique o console para mais informações.');
      }
    }

    fetchTasks();
  }, []);

  const handleStatusChange = async (task: Task, checked: boolean) => {
    const id = task.id;
    const status = checked ?   'concluido' : 'em progresso';
    const descricao = task.descricao;
    const nome = task.nome;
    const data = task.data;

    try {
      const response = await fetch(`https://www.neuronavigator.x10.mx/php/update.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, status, descricao, nome, data })
      });
  
      if (!response.ok) {
        throw new Error('Erro ao atualizar status da tarefa');
      }
  
      const updatedTask = await response.json();
      const newTasks = [...tasks];
      newTasks[task.id - 1] = updatedTask;
      setTasks(newTasks)
    } catch (error) {
      console.error('Erro ao atualizar status da tarefa:', error);
      alert('Erro ao atualizar status da tarefa. Verifique o console para mais informações.');
    }
  };
  

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Lista de Tarefas</h1>
      </div>
      <div className="flex justify-center">
        <ul className="bg-white shadow-md rounded-lg p-4 h-[90%] w-[90%]">
          {tasks.map(task => (
            <li key={task.id} className="list-group-item flex items-center justify-between">
              <div>
                <input
                  type="checkbox"
                  checked={task.status === 'concluido'}
                  onChange={(e) => handleStatusChange(task, e.target.checked)}
                  className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span>{task.nome} - {task.descricao}, {task.data}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
