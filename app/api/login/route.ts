// app/api/test/route.ts
import Cors from "cors";
import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";
import User from "../../models/user";
const cors = Cors({
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  origin: "*",
});

export async function POST() {
  const users = prisma.user.findMany();
  console.log(users);
  return NextResponse.json({ userdata: users[0] });
}
