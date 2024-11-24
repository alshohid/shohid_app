import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req) {
  try {
    const prisma = new PrismaClient();

    const result = await prisma.allProject.findMany({});

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", data: e });
  }
}
