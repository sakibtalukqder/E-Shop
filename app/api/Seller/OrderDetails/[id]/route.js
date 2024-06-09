import { prisma } from "@/config/db"
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {

    const { id } = params;
    try {
        const order = await prisma.orderEdProduct.findFirst({
            where: {
                id: parseInt(id)
            },
            include: {
                order: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        createdAt: true,
                        presentAddress: true,
                        mobileNumber: true,
                    }
                },
            }
        })
        return NextResponse.json(order)
    } catch (error) {
        return NextResponse.json({ error: 'Order not found' }, { status: 500 });
    }
}
