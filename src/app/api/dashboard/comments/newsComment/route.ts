import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const prisma = new PrismaClient();
        const { searchParams } = new URL(req.url);
        const postID = parseInt(searchParams.get("postID") as any);
        const [comments,totalCount]= await prisma.$transaction([
        prisma.comments.findMany({
            where: { postID: postID },
            include: {
                users: { select: { firstName: true, lastName: true } },
            },
            }),
            prisma.comments.count({
                where:{postID:postID}
            })
            ])
        return NextResponse.json({ status: "success", data:{totalCount, comments }});
    } catch (error: any) {
        return NextResponse.json({ status: "fail", data: error });
    }
    }
