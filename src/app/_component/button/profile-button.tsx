"use client";

import type { FC } from "react";

import { Button } from "@/app/_component/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/app/_component/ui/dropdown-menu";
import { ArrowUpRightFromSquare, LogOut, Settings, User, UserRound } from "lucide-react";

export const ProfileButton: FC = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild={true}>
				<Button variant="ghost" size="icon" className="rounded-full bg-accent">
					<UserRound className="h-[1.2rem] w-[1.2rem]" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-[220px]">
				<DropdownMenuLabel>マイアカウント</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={() => console.log("プロフィール")}>
					<User className="mr-2 h-4 w-4" />
					<span>プロフィール</span>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => console.log("設定")}>
					<Settings className="mr-2 h-4 w-4" />
					<span>設定</span>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={() => console.log("ログアウト")}>
					<LogOut className="mr-2 h-4 w-4" />
					<span>設定</span>
					<ArrowUpRightFromSquare className="ml-auto h-4 w-4" />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
