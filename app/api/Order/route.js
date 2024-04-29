import { prisma } from "@/config/db";
import { NextResponse } from "next/server";


export const GET = async (request) => {
    try {
        const order = await prisma.order.findMany({
            include: {
                orderEdProducts: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        presentAddress: true,
                        mobileNumber: true,
                    }
                }
            }
        })
        return NextResponse.json(order)
    } catch (error) {
        return NextResponse.json({ error: 'Order not found' }, { status: 500 });
    }
}

export const POST = async (request) => {
    try {
        // Parse request body
        const { userId, totalPrice, products } = await request.json();

        // Create order and associated products
        const order = await prisma.order.create({
            data: {
                userId: userId,
                totalPrice: totalPrice,
                orderEdProducts: {
                    create: products.map(product => ({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        stock: product.stock,
                        sellerId: product.sellerId,
                        quantity: product.quantity,
                    }))
                }
            },
            include: {
                orderEdProducts: true // Include the associated orderEdProducts in the response
            }
        });

        // Return success response with the created order
        return NextResponse.json({ order }, { status: 200 });
    } catch (error) {
        // Log the error for debugging purposes
        console.error(error);

        // Return error response with a more specific error message
        return NextResponse.json({ error: 'Failed to create order.' }, { status: 500 });
    }
};
