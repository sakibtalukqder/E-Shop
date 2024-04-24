import { prisma } from "@/config/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const { id } = params;
    try {
        const Product = await prisma.product.findMany({
            where: {
                sellerId: parseInt(id),
            },
        })
        return NextResponse.json({ Product }, { status: 200 })
    } catch (error) {
        console.log(error);
    }
}