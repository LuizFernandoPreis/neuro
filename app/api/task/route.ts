import Cors from "cors";
import { NextResponse, NextRequest } from "next/server";
import Task from "../../models/Task";
import prisma from "../../lib/prisma";

const cors = Cors({
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  origin: "*",
});


export async function POST(request: NextRequest) {
  const req = await request.json();
  const {nome, descricao, status, data, userId} = req;
  const response = await prisma.task.create({data:{
    nome, descricao, status, data, userId
  }})
  console.log(response )

  return NextResponse.json({ msg: response });
}


