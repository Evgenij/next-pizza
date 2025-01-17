import {
	Container,
	SelectorDiameter,
	Title,
	WheelImage,
} from "@/shared/components/shared";
import { prisma } from "@/prisma/prismaClient";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
	className?: string;
	params: {
		id: string;
	};
}

export default async function PageWheel({ className, params }: Props) {
	const { id } = await params;

	const dataWheel = await prisma.wheel.findFirst({
		where: { id: Number(id) },
		include: {
			diameters: true,
		},
	});

	if (!dataWheel) return notFound();

	return (
		<Container className="flex gap-4 my-10">
			<div className="w-1/2">
				<WheelImage
					src={dataWheel.image}
					diameters={4}
					currentDiameter={1}
				></WheelImage>
			</div>
			<div className="w-1/2">
				<Title
					text={dataWheel.name}
					size="md"
					className="font-extrabold mb-1"
				></Title>
			</div>
		</Container>
	);
}
