import Cors from "cors";
import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/prisma";

// Configuração do middleware CORS
const cors = Cors({
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  origin: "*",
});

export async function POST(request: NextRequest) {
  try {

    const req = await request.json();
    const { id, nome, descricao, status, data, userId } = req;

    if (!id) {
      return NextResponse.json({ error: "ID da tarefa é necessário." }, { status: 400 });
    }

    const response = await prisma.task.update({
      where: { id }, 
      data: {
        nome,
        descricao,
        status,
        data,
        userId, 
      },
    });

    return NextResponse.json({ msg: "Tarefa atualizada com sucesso.", task: response });
  } catch (error) {
    console.error("Erro ao atualizar a tarefa:", error);
    return NextResponse.json({ error: "Erro ao atualizar a tarefa." }, { status: 500 });
  }
}
