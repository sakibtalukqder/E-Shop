import { prisma } from "@/config/db"
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {

    const { id } = params;
    try {
        const order = await prisma.orderEdProduct.findMany({
            where: { sellerId: parseInt(id) },
        })
        return NextResponse.json(order)
    } catch (error) {
        return NextResponse.json({ error: 'Order not found' }, { status: 500 });
    }
}