import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import { parseCookies } from "nookies";

export default function Texts(): JSX.Element {
  useEffect(() => {
    async function fetchTasks() {
      try {
        const cookies = parseCookies();
        const id = cookies.token;
        const response = await fetch(
          "http://localhost:3000/api/task/getTask",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
          }
        );
        const res = await response.json();
        const tasks = res.msg;

        console.log(tasks)
      
        let doneCount = 0;
        let todoCount = 0;

        tasks.forEach((task: { status: string }) => {
          if (task.status === "concluido") {
            doneCount++;
          } else {
            todoCount++;
          }
        });

        updateChart(doneCount, todoCount);
      } catch (error) {
        console.error("Erro ao buscar as tarefas:", error);
      }
    }

    function updateChart(doneCount: number, todoCount: number) {
      const canvas = document.getElementById("taskChart") as HTMLCanvasElement;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          new Chart(ctx, {
            type: "pie",
            data: {
              labels: ["Concluídas", "Por fazer"],
              datasets: [
                {
                  data: [doneCount, todoCount],
                  backgroundColor: ["#36a2eb", "#ff6384"],
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "top",
                },
                title: {
                  display: true,
                  text: "Porcentagem das tarefas",
                },
              },
              animation: {
                animateScale: true,
                animateRotate: true,
              },
            },
          });
        }
      }
    }

    fetchTasks();
  }, []);

  return (
    <>
      <h1 className="text-center mb-4">
        <b> Técnicas de Relaxamento e Concentração</b>
      </h1>
      <div className="flex justify-center items-center mb-4">
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white shadow-md rounded-lg h-100 p-4 flex justify-center items-center">
            <canvas id="taskChart" width="400" height="200"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
