"use client";

import {
	Dialog,
	DialogContent,
	DialogTitle,
} from "@/shared/components/ui/dialog";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { ChooseWheelFrom } from "../ChooseWheelFrom";
import { IWheelFullData } from "@/types/types";

interface Props {
	className?: string;
	wheel: IWheelFullData;
}

export const ChooseWheelModal: FC<Props> = ({ className, wheel }) => {
	const router = useRouter();
	return (
		<Dialog open={Boolean(wheel)} onOpenChange={() => router.back()}>
			<DialogContent className="p-0 bg-white overflow-hidden">
				<DialogTitle className="text-2xl font-bold text-center p-5 bg-slate-100">
					Choose a wheel
				</DialogTitle>
				<ChooseWheelFrom wheel={wheel} />
			</DialogContent>
		</Dialog>
	);
};
