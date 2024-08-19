// app/api/test/route.ts
import Cors from "cors";
import { NextResponse, NextRequest } from "next/server";
import User from "../../models/user";
import prisma from "../../lib/prisma";

const cors = Cors({
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  origin: "*",
});

let users: User[] = [];

export async function POST(request: NextRequest) {
  const data = await request.json();
  prisma.user.create(data)
  return NextResponse.json({ msg: "salvo" });
}

export default users;
