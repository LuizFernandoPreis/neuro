"use client";
import { useEffect, useState } from "react";
import { parseCookies } from "nookies";

interface Task {
  id: string;
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
        const cookies = parseCookies();
        const id = cookies.token;
        const response = await fetch("http://localhost:3000/api/task/getTask", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar tarefas");
        }

        const res = await response.json();
        setTasks(res.msg);
      } catch (error) {
        console.error("Erro ao buscar as tarefas:", error);
        alert("Erro ao buscar as tarefas. Verifique o console para mais informações.");
      }
    }

    fetchTasks();
  }, []);

  const handleStatusChange = async (task: Task, checked: boolean) => {
    const id = task.id;
    const status = checked ? "concluido" : "em progresso";
    const { descricao, nome, data } = task;

    try {
      const response = await fetch("http://localhost:3000/api/task/updateTask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, status, descricao, nome, data }),
      });

      if (!response.ok) {
        throw new Error("Erro ao atualizar status da tarefa");
      }

      const updatedTask = await response.json();
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === updatedTask.id ? updatedTask : t))
      );
      window.location.reload();
    } catch (error) {
      console.error("Erro ao atualizar status da tarefa:", error);
      alert("Erro ao atualizar status da tarefa. Verifique o console para mais informações.");
    }
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Lista de Tarefas</h1>
      </div>
      <div className="flex justify-center">
        <ul className="bg-white shadow-md rounded-lg p-4 h-[90%] w-[90%]">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="list-group-item flex items-center justify-between"
            >
              <div>
                <input
                  type="checkbox"
                  checked={task.status === "concluido"}
                  onChange={(e) => handleStatusChange(task, e.target.checked)}
                  className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span>
                  {task.nome} - {task.descricao}, {task.data}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
