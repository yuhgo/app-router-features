import type { ThemeProviderProps } from "next-themes/dist/types";
import type { FC } from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, ...props }) => {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
