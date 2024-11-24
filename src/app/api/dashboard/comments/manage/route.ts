import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const headerlist =await headers();
  const user_Id = parseInt(headerlist.get("id") || "0") as any;

    // Extract pagination parameters from the query string
    const { searchParams } = new URL(req.url);
    const skip = parseInt(searchParams.get("skip") || "0");
    const take = parseInt(searchParams.get("take") || "5");

    // Fetch comments with pagination and include news titles
    const result = await prisma.comments.findMany({
      where: { userID: user_Id },
      orderBy: { id: "asc" },
      skip,
      take,
      include: {
        news_list: {
          select: {
            title: true,
          },
        },
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error: any) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}

export async function POST(req: Request, ) {
  try {
    const headerlist =await headers();
    const user_Id = parseInt(headerlist.get("id") as any);
    const reqBody = await req.json();
    reqBody.userID = user_Id;
    const prisma = new PrismaClient();
    const result = await prisma.comments.create({
      data: reqBody,
      include: {
        users: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error: any) {
    return NextResponse.json({ status: "fail", data: error });
  }
}

export async function DELETE(req: Request,) {
  try {
    const headerlist =await headers();
    const user_Id = parseInt(headerlist.get("id") as any);
    const reqBody = await req.json();
    const comment_id = reqBody.id;
    const prisma = new PrismaClient();
    const result = await prisma.comments.deleteMany({
      where: {
        AND: [
          {
            userID: user_Id,
          },
          {
            id: comment_id,
          },
        ],
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
