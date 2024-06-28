//app/api/test/route.js

import { NextResponse } from 'next/server'
 
export async function GET() {
  return NextResponse.json({ msg: 'Hello from server' })
}
