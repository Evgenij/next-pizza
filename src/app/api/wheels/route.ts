import { prisma } from "@/prisma/prismaClient";
import { NextResponse } from "next/server";

export const GET = async () => {
	const wheels = await prisma.wheel.findMany();

	return NextResponse.json(wheels);
};
