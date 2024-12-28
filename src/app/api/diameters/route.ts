import { prisma } from "@/prisma/prismaClient";
import { NextResponse } from "next/server";

export const GET = async () => {
	const diameters = await prisma.diameter.findMany();

	return NextResponse.json(diameters);
};
