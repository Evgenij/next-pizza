import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "@/app/globals.css";

export const font = Chakra_Petch({
	// subsets: ["cyrillic"],
	variable: "--font-chakra_petch",
	weight: ["300", "400", "500", "600", "700"],
});

export default function BaseLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${font.variable}`}>{children}</body>
		</html>
	);
}
