import { ChooseWheelModal } from "@/shared/components/shared";
import { prisma } from "@/prisma/prismaClient";
import React from "react";
import { notFound } from "next/navigation";

interface Props {
	className?: string;
	params: {
		id: string;
	};
}

export default async function ModalWheel({ className, params }: Props) {
	const { id } = await params;

	const dataWheel = await prisma.wheel.findFirst({
		where: { id: Number(id) },
		include: {
			diameters: true,
		},
	});

	if (!dataWheel) return notFound();
	return <ChooseWheelModal wheel={dataWheel}></ChooseWheelModal>;
}
