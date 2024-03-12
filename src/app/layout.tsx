import "@/app/globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: "App Router Features",
	description: "App Router Features",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
