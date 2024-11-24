import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const prisma = new PrismaClient();

    const result = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
        subcategories: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        id: "asc",
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}
