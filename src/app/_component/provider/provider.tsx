"use client";

import { ThemeProvider } from "@/app/_component/provider/theme-provider";
import type { FC, PropsWithChildren } from "react";

export const Provider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} disableTransitionOnChange={true}>
			{children}
		</ThemeProvider>
	);
};
