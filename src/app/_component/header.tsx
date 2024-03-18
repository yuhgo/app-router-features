import { CommandInputButton } from "@/app/_component/button/command-input-button";
import { InspectButton } from "@/app/_component/button/inspect-button";
import { ProfileButton } from "@/app/_component/button/profile-button";
import { ThemeToggleButton } from "@/app/_component/button/theme-toggle-button";
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
				<InspectButton />

				{/* プロフィールボタン */}
				<ProfileButton />
			</div>
		</header>
	);
};
