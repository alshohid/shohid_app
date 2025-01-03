import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const catID = parseInt(searchParams.get("catID") as any);
        const prisma = new PrismaClient();
        const result = await prisma.newsList.findMany({
            where:{catID:catID},
            select:{id:true,title:true,short_des:true,img1:true,img2:true,img3:true,img4:true}
        })
        return NextResponse.json({ status: "success", data: result});
    } catch (e) {
        return NextResponse.json({ status: "fail", data: e });
    }
    }
