import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function PUT(req) {
    try {
        const reqBody = await req.json()
        const headerList = headers();
        const userId = parseInt(headerList.get('id') )
        const prisma = new PrismaClient();
        let result = await prisma.users.update({
            where: { id: userId  },
            data: reqBody,
        })

        return NextResponse.json({ status: "success", data: result });
    } catch (error) {
        return NextResponse.json({ status: "fail", data: error });
    }
}