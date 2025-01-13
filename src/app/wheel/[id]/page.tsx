import React, { FC, useState, useEffect } from "react";

interface Props {
	className?: string;
}

interface IData {
	key: string;
}

export const page: FC<Props> = ({ className }) => {
	// state
	const [] = useState<IData>({ key: "data" });

	// inner functions
	const someFunc = () => {};

	// handlers
	const handlerChange: React.ChangeEventHandler<HTMLInputElement> = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {};

	// hooks
	useEffect(() => {}, []);

	return <div className={className}>page</div>;
};
