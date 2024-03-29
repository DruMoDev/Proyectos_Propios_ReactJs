import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request, {params}) {
  const prisma = new PrismaClient()
  try {
    const id = params.id

    const ordenActualizada = await prisma.orden.update({
      where: {
        id: parseInt(id)
      },
      data: {
        estado: true
      }
    })
    return NextResponse.json(ordenActualizada)
  } catch (e) {
    console.log(e);
    return new Response(null, { status: 400, statusText: "Bad Request" });
  }
}
