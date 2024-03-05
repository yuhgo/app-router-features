"use client";

import { CommandInputButton } from "@/app/_component/button/command-input-button";
import { ProfileButton } from "@/app/_component/button/profile-button";
import { ThemeToggleButton } from "@/app/_component/button/theme-toggle-button";
import { Button } from "@/app/_component/ui/button";
import { SearchCode } from "lucide-react";
import type { FC } from "react";

export const Header: FC = () => {
	return (
		<header className="flex items-center justify-between p-4">
			{/* <div>App Router Features</div> */}
			<div className="font-bold text-xl">AR Features</div>

			<div className="flex items-center gap-2">
				{/* ドキュメント検索 */}
				<CommandInputButton />

				{/* カラーテーマのトグルボタン */}
				<ThemeToggleButton />

				{/* 実装ビューのトグルボタン */}
				<Button variant="ghost" size="icon">
					<SearchCode size={20} />
				</Button>

				{/* プロフィールボタン */}
				<ProfileButton />
			</div>
		</header>
	);
};
