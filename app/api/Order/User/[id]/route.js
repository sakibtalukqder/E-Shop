import { prisma } from "@/config/db"
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {

    const { id } = params;
    try {
        const order = await prisma.order.findMany({
            where: { userId: parseInt(id) },
            include: {
                orderEdProducts: true,
            }
        })
        return NextResponse.json(order)
    } catch (error) {
        return NextResponse.json({ error: 'Order not found' }, { status: 500 });
    }
}