"use client";

import { explorerData } from "@/app/_component/explorer/explorer-data";
import { File, Folder } from "@/app/_component/explorer/folder";
import type { FC } from "react";

export type FolderNode = {
	defaultOpen?: boolean;
	filePath?: string;
	name: string;
	type: "folder" | "file";
	children?: FolderNode[];
};
export type ExplorerNode = FolderNode;

const FolderComponent: FC<ExplorerNode> = (props) => {
	const { defaultOpen = false, name, type, children } = props;

	// ファイルまたはフォルダを描画する簡単な条件分岐
	if (type === "file") {
		const fileExtension = name.split(".").pop();

		return (
			<div className="flex flex-col">
				<File fileName={name} fileExtension={fileExtension} />
			</div>
		);
	}

	return (
		<div className="flex flex-col">
			<Folder folderName={name} defaultOpen={defaultOpen}>
				{/* 再帰的にFolderComponentを呼び出す */}
				{children?.map((child, index) => {
					return (
						<div className="flex flex-col">
							<FolderComponent
								key={`${child.filePath}_${index}`}
								defaultOpen={true}
								name={child.name}
								type={child.type}
								children={child.children ?? undefined}
							/>
						</div>
					);
				})}
			</Folder>
		</div>
	);
};

export const Explorer: FC = () => {
	return (
		<div className="mx-auto flex h-full w-full flex-col whitespace-nowrap text-xs">
			{explorerData.map((data, index) => (
				<div className="flex flex-col">
					<FolderComponent
						key={`${data.filePath}_${index}`}
						defaultOpen={true}
						name={data.name}
						type={data.type}
						children={data.children || undefined}
					/>
				</div>
			))}
		</div>
	);
};
