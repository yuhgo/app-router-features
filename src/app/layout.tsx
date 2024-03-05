import "@/app/globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import { cn } from "@/_lib/shadcn/utils";
import { Header } from "@/app/_component/header";
import { Provider } from "@/app/_component/provider/provider";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJp = Noto_Sans_JP({
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "e2e lesson",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="ja">
			<body className={cn("min-h-screen bg-background font-sans antialiased", notoSansJp)}>
				<Provider>
					<Header />
					{children}
				</Provider>
			</body>
		</html>
	);
}
