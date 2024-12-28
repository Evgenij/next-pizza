"use client";

import { cn } from "@/lib/utils";
import { Api } from "@/services/apiClient";
import { Wheel } from "@prisma/client";
import { Search } from "lucide-react";
import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";

interface Props {
	className?: string;
}

export const SearchInput: FC<Props> = ({ className }) => {
	// state
	const [focused, setFocused] = useState(false);
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [wheels, setWheels] = useState<Wheel[]>([]);
	const ref = useRef(null);

	// inner functions
	const onClickItem = () => {
		setFocused(false);
		setSearchQuery("");
		setWheels([]);
	};

	// handlers
	const handlerChange: React.ChangeEventHandler<HTMLInputElement> = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setSearchQuery(e.target.value);
	};

	//hooks
	useClickAway(ref, () => {
		setFocused(false);
	});

	useDebounce(
		() => {
			Api.wheels.search(searchQuery).then((data) => setWheels(data));
		},
		500, // 1/2 second
		[searchQuery]
	);

	return (
		<>
			{focused && (
				<div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
			)}
			<div
				ref={ref}
				className={cn(
					"flex rounded-md flex-1 justify-between relative h-11 z-30",
					className
				)}
			>
				<Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
				<input
					className="rounded-md outline-none w-full bg-gray-100 pl-11"
					type="text"
					placeholder="Find wheel..."
					onFocus={() => setFocused(true)}
					onChange={handlerChange}
					value={searchQuery}
				/>

				{wheels.length > 0 && (
					<div
						className={cn(
							"absolute w-full bg-white rounded-md p-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
							focused && "visible opacity-100 top-12"
						)}
					>
						{wheels.map((wheel) => (
							<Link
								onClick={onClickItem}
								key={wheel.id}
								className="flex rounded-sm items-center gap-3 w-full px-3 py-2 hover:bg-slate-100"
								href={`/product/${wheel.id}`}
							>
								<img
									className="rounded-sm h-8 w-8"
									src={wheel.image}
									alt={wheel.name}
								/>
								<span>{wheel.name}</span>
							</Link>
						))}
					</div>
				)}
			</div>
		</>
	);
};
