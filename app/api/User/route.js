import { prisma } from "@/config/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const data = await prisma.user.findMany();
        return Response.json(data)
    } catch (error) {
        return Response.json({ error: error.message })
    }
}

export const POST = async (request) => {
    try {
        const { name, email, password, presentAddress, mobileNumber } = await request.json();
        const exEmail = await prisma.user.findUnique({
            where: { email: email }
        })
        if (exEmail) {
            return NextResponse.json({ user: null, message: "This Email is already in use" }, { status: 409 })
        }
        const enPassword = await hash(password, 10)
        const data = { name, email, password: enPassword, presentAddress, mobileNumber }
        const result = await prisma.user.create({ data: data })
        if (!result) {
            return null;
        }
        return NextResponse.json({ message: "User Added" }, { status: 201 })
    } catch (error) {
        console.log("Error------------------------------------------");
        return Response.json({ error: error.message });
    }
}