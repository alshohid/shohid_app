import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function PUT(req: Request, res: Response) {
    try {
        const reqBody = await req.json()
        const headerList = headers();
        const userId = parseInt(headerList.get('id') as any)
        const prisma = new PrismaClient();
        let result = await prisma.users.update({
            where: { id: userId as any },
            data: reqBody,
        })

        return NextResponse.json({ status: "success", data: result });
    } catch (error: any) {
        return NextResponse.json({ status: "fail", data: error });
    }
}