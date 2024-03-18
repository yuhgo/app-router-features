"use client";

import { Button } from "@/app/_component/ui/button";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/app/_component/ui/command";
import { ArrowUpRightFromSquare, Component, Settings, User } from "lucide-react";
import { type FC, useEffect, useState } from "react";

export const CommandInputButton: FC = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	return (
		<>
			<Button variant="outline" onClick={() => setOpen(true)}>
				<div className="flex justify-between gap-8">
					<p className="text-muted-foreground">ドキュメントを検索...</p>
					<kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-medium font-mono text-[10px] text-muted-foreground opacity-100">
						<span className="text-xs">⌘</span>K
					</kbd>
				</div>
			</Button>

			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="機能を検索..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>

					<CommandGroup heading="ウィジェット">
						<CommandItem>
							<Component className="mr-2 h-4 w-4" />
							<span>Auth</span>
						</CommandItem>
						<CommandItem>
							<Component className="mr-2 h-4 w-4" />
							<span>Like Button</span>
						</CommandItem>
						<CommandItem>
							<Component className="mr-2 h-4 w-4" />
							<span>YouTube Player</span>
						</CommandItem>
					</CommandGroup>
					<CommandSeparator />

					<CommandGroup heading="設定">
						<CommandItem>
							<User className="mr-2 h-4 w-4" />
							<span>プロフィール</span>
						</CommandItem>
						<CommandItem>
							<Settings className="mr-2 h-4 w-4" />
							<span>設定</span>
							<CommandShortcut>
								<ArrowUpRightFromSquare className="ml-auto h-4 w-4" />
							</CommandShortcut>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
};
