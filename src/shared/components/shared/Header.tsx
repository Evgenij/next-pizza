import { cn } from "@/shared/lib/utils";
import React from "react";
import Image from "next/image";
import { Button } from "@/shared/components/ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import { Container } from "./index";
import Link from "next/link";
import { SearchInput } from "./index";

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn("border border-b", className)}>
			<Container className="flex items-center justify-between py-8 gap-10">
				<Link href="/">
					<div className="flex items-center space-x-3">
						<Image
							src="/logo.svg"
							alt="Logo"
							width={24}
							height={24}
						/>
						<div className="flex flex-col space-y-1">
							<h1 className="text-2xl uppercase font-black leading-none">
								NEXT Wheels
							</h1>
							<p className="text-xm text-gray-400 leading-4">
								For styling your car
							</p>
						</div>
					</div>
				</Link>
				<div className="flex-1">
					<SearchInput />
				</div>
				<div className="flex items-center gap-3">
					<Button
						variant="outline"
						className="flex items-center gap-1"
					>
						{" "}
						<User size={16} />
						Login
					</Button>

					<Button className={cn("group relative")}>
						<b>332 PLN</b>
						<span className="h-full w-[1px] bg-white/30 mx-3" />
						<div className="flex items-center gap-2 transition duration-300 group-hover:opacity-0">
							<ShoppingCart
								size={16}
								className="relative"
								strokeWidth={2}
							/>
							<b>3</b>
						</div>
						<ArrowRight
							size={20}
							className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
						/>
					</Button>
				</div>
			</Container>
		</header>
	);
};
