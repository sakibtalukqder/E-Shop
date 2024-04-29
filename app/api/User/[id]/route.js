import { prisma } from "@/config/db";
import { NextResponse } from "next/server";


export const GET = async (request, { params }) => {
    const { id } = params;
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: parseInt(id),
            },
            
            select: {
                id: true,
                name: true,
                email: true,
                presentAddress: true,
                mobileNumber: true,
                // Exclude password field from the selection
                // products true
            },
        })
        return NextResponse.json({ user }, { status: 200 })
    } catch (error) {
        console.log(error);
    }
}

export const PATCH = async (request, { params }) => {
    const { id } = params;
    const { name, email, presentAddress, mobileNumber } = await request.json();

    try {

        // Update the user
        const updatedUser = await prisma.user.update({
            where: {
                id: parseInt(id),
            },
            data: { name, email, presentAddress, mobileNumber },
        });

        return NextResponse.json({ user: updatedUser }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
};