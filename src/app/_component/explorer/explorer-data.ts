import type { FolderNode } from "@/app/_component/explorer/explorer";

export const explorerData = [
	{
		name: "App Router Features",
		type: "folder",
		filePath: "/",
		children: [
			{ name: ".vscode", type: "folder", filePath: "/.vscode" },
			{ name: ".git", type: "folder", filePath: "/.git" },
			{ name: ".next", type: "folder", filePath: "/.next" },
			{ name: ".public", type: "folder", filePath: "/.public" },
			{
				name: "src",
				type: "folder",
				filePath: "/src",
				children: [
					{
						name: "app",
						type: "folder",
						filePath: "/src/app",
						children: [
							{
								name: "_lib",
								type: "folder",
								filePath: "/src/app/_lib",
								children: [
									{
										name: "const.ts",
										type: "file",
										filePath: "/src/app/_lib/const.ts",
									},
								],
							},
							{
								name: "_component",
								type: "folder",
								filePath: "/src/app/_component",
								children: [
									{
										name: "button",
										type: "folder",
										filePath: "/src/app/_component/button",
										children: [
											{
												name: "command-input-button.tsx",
												type: "file",
												filePath: "/src/app/_component/button/command-input-button.tsx",
											},
										],
									},
									{
										name: "explorer",
										type: "folder",
										filePath: "/src/app/_component/explorer",
										children: [
											{
												name: "folder-button.tsx",
												type: "file",
												filePath: "/src/app/_component/explorer/folder-button.tsx",
											},
										],
									},
									{
										name: "header.tsx",
										type: "file",
										filePath: "/src/app/_component/header.tsx",
									},
								],
							},
							{
								name: "page.tsx",
								type: "file",
								filePath: "/src/app/page.tsx",
							},
							{
								name: "layout.tsx",
								type: "file",
								filePath: "/src/app/layout.tsx",
							},
							{
								name: "globals.css",
								type: "file",
								filePath: "/src/app/globals.css",
							},
						],
					},
				],
			},
			{
				name: "bun.lockb",
				type: "file",
				filePath: "/bun.lockb",
			},
			{
				name: "package.json",
				type: "file",
				filePath: "/package.json",
			},
			{
				name: "tsconfig.json",
				type: "file",
				filePath: "/tsconfig.json",
			},
			{
				name: "next.config.js",
				type: "file",
				filePath: "/next.config.js",
			},
			{
				name: "tailwind.config.js",
				type: "file",
				filePath: "/tailwind.config.js",
			},
			{
				name: "components.json",
				type: "file",
				filePath: "/components.json",
			},
		],
	},
] as const satisfies FolderNode[];
