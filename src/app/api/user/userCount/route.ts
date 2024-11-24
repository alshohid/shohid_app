import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request,) {
  try {
    const prisma = new PrismaClient();
    const [users, count] = await Promise.all([
      prisma.users.findMany({
        select: { id: true, firstName: true, lastName: true, mobile: true },
      }),
      prisma.users.count()
    ]);
    return NextResponse.json({ status: "success", data: { count, users } });
  } catch (error: any) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}
