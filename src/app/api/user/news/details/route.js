import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = parseInt(searchParams.get("id"));
        const prisma = new PrismaClient();
        const result = await prisma.newsList.findUnique({
        where: { id: id },
        include:{category:{
            select:{
                id:true,name:true
            }
        }}
        });
        return NextResponse.json({ status: "success", data: result });
    } catch (e) {
        return NextResponse.json({ status: "fail", data: e });
    }
    }
