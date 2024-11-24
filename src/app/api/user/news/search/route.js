import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const keywords = searchParams.get("keywords");
        const prisma = new PrismaClient();
        const result = await prisma.newsList.findMany({
          where: { title: { contains: keywords } },
          select: {
            id: true,
            title: true,
            short_des: true,
            long_des: true,
            img1: true,
            img2: true,
            img3: true,
            img4: true,
            createdAt: true,
            _count: {
              select: {
                comments: true,
              },
            },
          },
        });
           const formattedResult = result.map((news) => ({
             ...news,
             totalComments: news._count.comments,
           }));
        return NextResponse.json({ status: "success", data: formattedResult });
    } catch (e) {
        return NextResponse.json({ status: "fail", data: e });
    }
    }
