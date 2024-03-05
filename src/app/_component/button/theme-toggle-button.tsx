"use client";

import { Button } from "@/app/_component/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/app/_component/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import type { FC } from "react";

export const ThemeToggleButton: FC = () => {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild={true}>
				<Button variant="ghost" size="icon">
					<Sun className="dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">toggleTheme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>ライトテーマ</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>ダークテーマ</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>システムテーマ</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
