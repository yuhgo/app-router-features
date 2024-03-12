"use client";

import { useChangeLocale, useCurrentLocale } from "@/_lib/locales/client";
import { Button } from "@/app/_component/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/app/_component/ui/dropdown-menu";
import { Languages } from "lucide-react";

export const LocaleSwitcherWidget = () => {
	const changeLocale = useChangeLocale();
	const locale = useCurrentLocale();

	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild={true}>
					<Button variant="ghost" className="font-mono">
						<Languages size={19} className="mr-2" />
						{locale === "ja" ? "JA" : "EN"}
						<span className="sr-only">{locale === "ja" ? "æ¥æ¬èª" : "English"}</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem onClick={() => changeLocale("ja")}>Japanese</DropdownMenuItem>
					<DropdownMenuItem onClick={() => changeLocale("en")}>English</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};
