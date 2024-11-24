import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const prisma = new PrismaClient();
        const {searchParams}= new URL(req.url)
        const type =  searchParams.get('type')
        let result = await prisma.policies.findMany({
            where:{type:type}
        });
        return NextResponse.json({ status: "success", data: result });
    } catch (error) {
        return NextResponse.json({ status: "fail", data: error });
    }
    }
