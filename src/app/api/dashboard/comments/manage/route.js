import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const headerlist =  headers(); // Await the headers function
    const user_Id = parseInt(headerlist.get("id") || "0", 10); // Provide a default to avoid NaN

    // Fetch comments with pagination and include news titles
    const result = await prisma.comments.findMany({
      where: { userID: user_Id },
      orderBy: { id: "asc" },
      include: {
        news_list: {
          select: {
            title: true,
          },
        },
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}

export async function POST(req) {
  try {
    const headerlist =  headers(); // Await the headers function
    const user_Id = parseInt(headerlist.get("id") || "0", 10);
    const reqBody = await req.json();
    reqBody.userID = user_Id;

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
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}

export async function DELETE(req) {
  try {
    const headerlist =  headers(); // Await the headers function
    const user_Id = parseInt(headerlist.get("id") || "0", 10);
    const reqBody = await req.json();
    const comment_id = reqBody.id;

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
    return NextResponse.json({ status: "fail", data: error.message });
  }
}
