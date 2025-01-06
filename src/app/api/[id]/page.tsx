"use client";

import React, { FC, useState, useEffect } from "react";

interface Props {
	id: number;
	className?: string;
}

interface IData {
	key: string;
}

export const page: FC<Props> = ({ className, id }) => {
	// state
	const [] = useState<IData>({ key: "data" });

	// inner functions

	// handlers

	// hooks
	useEffect(() => {}, []);

	return <div className={className}>{id}</div>;
};
