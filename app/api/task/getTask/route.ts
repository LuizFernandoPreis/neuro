import Cors from "cors";
import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/prisma";

const cors = Cors({
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  origin: "*",
});


export async function POST(request: NextRequest) {
  const req = await request.json();
  const {id} = req;

  const response = await prisma.task.findMany({where:{userId: id}})
  return NextResponse.json({ msg: response });
}
