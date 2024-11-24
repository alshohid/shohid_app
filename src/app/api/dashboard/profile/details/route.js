import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const headerList = headers();
        const userId =  parseInt( headerList.get('id'))
        const prisma = new PrismaClient();
        let result = await prisma.users.findUnique({
            where: { id: userId  },
        })

        return NextResponse.json({ status: "success", data: result });
    } catch (error) {
        return NextResponse.json({ status: "fail", data: error });
    }
}