import { prisma } from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
	const query = req.nextUrl.searchParams.get("query") || "";
	const wheels = await prisma.wheel.findMany({
		where: {
			name: {
				contains: query,
				mode: "insensitive",
			},
		},
		take: 5,
	});

	return NextResponse.json(wheels);
};
