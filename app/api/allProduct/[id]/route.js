import { prisma } from "@/config/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const { id } = params;
    try {
        const Product = await prisma.product.findFirst({
            where: {
                id: parseInt(id),
            },
        })
        return NextResponse.json({ Product }, { status: 200 })
    } catch (error) {
        console.log(error);
    }
}



export const PATCH = async (request, { params }) => {
    const { id } = params;
    try {

        // Extract the fields to update from the request body
        const { name, description, image, price, stock, Catagory } = await request.json();

        // Find the product by ID and update it
        const updatedProduct = await prisma.product.update({
            where: {
                id: parseInt(id),
            },
            data: { name, description, image, price, stock, Catagory },
        });

        return NextResponse.json({ product: updatedProduct }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.error("Internal Server Error", { status: 500 });
    }
}


export const DELETE = async (request, { params }) => {
    const { id } = params;
    try {
        // Find the product by ID and delete it
        const deletedProduct = await prisma.product.delete({
            where: {
                id: parseInt(id),
            },
        });

        return NextResponse.json(deletedProduct, { message: 'Product deleted successfully' }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.error("Internal Server Error", { status: 500 });
    }
}