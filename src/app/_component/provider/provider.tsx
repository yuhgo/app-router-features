"use client";

import { NextAuthProvider } from "@/app/_component/provider/next-auth-provider";
import { ThemeProvider } from "@/app/_component/provider/theme-provider";
import type { FC, PropsWithChildren } from "react";

export const Provider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<NextAuthProvider>
			<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} disableTransitionOnChange={true}>
				{children}
			</ThemeProvider>
		</NextAuthProvider>
	);
};
