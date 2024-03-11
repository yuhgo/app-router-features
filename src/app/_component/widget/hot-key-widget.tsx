"use client";

import { cn } from "@/_lib/shadcn/utils";
import { type FC, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

export const HotKeyWidget: FC = () => {
	const [active, setActive] = useState(false);

	useHotkeys("meta+u, ctrl+u", () => setActive((v) => !v), {
		preventDefault: true,
	});

	return (
		<kbd
			className={cn(
				"rounded-md border bg-muted px-2 py-1.5 font-mono font-semibold text-sm transition duration-500",
				active
					? "border-pink-500 bg-pink-500 text-white shadow-[0_1px_7px] shadow-pink-500"
					: "bg-muted text-muted-foreground shadow-sm",
			)}
		>
			<span className="mr-1">⌘</span>U
		</kbd>
	);
};
