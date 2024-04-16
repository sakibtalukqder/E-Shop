import { prisma } from "@/config/db";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const result = await prisma.product.findMany();
        return Response.json(result);
    } catch (error) {
        return Response.json({ error: error.message });
    }
}

export const POST = async (request) => {
    try {
        const { name, description, image, price, stock, Catagory, sellerId } = await request.json();
        const data = { name, description, image, price, stock, Catagory, sellerId }
        console.log("New Data : ", data);
        const result = await prisma.product.create({ data: data })
        return NextResponse.json({ message: "Product Added" }, { status: 201 })
    } catch (error) {
        return Response.json({ error: error.message });
    }
}
