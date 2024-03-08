"use client";

import { IconBrandCss3, IconBrandJavascript, IconBrandReact, IconBrandTypescript } from "@tabler/icons-react";
import { Braces, File as FileIcon, Folder as FolderIcon, FolderOpen } from "lucide-react";
import type { FC, ReactNode } from "react";
import { useToggle } from "usehooks-ts";

type FolderProps = {
	folderName: string;
	children: ReactNode;
	defaultOpen?: boolean;
};

export const Folder: FC<FolderProps> = (props) => {
	const { folderName, children, defaultOpen = true } = props;

	const [isOpen, openToggle] = useToggle(defaultOpen);

	return (
		<div className="py-1">
			<button type="button" className="flex items-center gap-2 text-muted-foreground" onClick={openToggle}>
				<FolderOpen aria-hidden={isOpen} className="hidden size-4 aria-[hidden=true]:block" />
				<FolderIcon aria-hidden={isOpen} className="block size-4 aria-[hidden=true]:hidden" />
				<p>{folderName}</p>
			</button>

			<div aria-hidden={isOpen} className="hidden pl-2 aria-[hidden=true]:block">
				{children}
			</div>
		</div>
	);
};

type FileProps = {
	fileName: string;
	fileExtension?: string;
};

export const File: FC<FileProps> = (props) => {
	const { fileName, fileExtension } = props;

	const fileIcon = () => {
		switch (fileExtension) {
			case "tsx":
				return <IconBrandReact className="size-4 text-blue-400" />;
			case "ts":
				return <IconBrandTypescript className="size-4 text-blue-400" />;
			case "js":
				return <IconBrandJavascript className="size-4 text-yellow-300" />;
			case "json":
				return <Braces className="size-4 text-yellow-500" />;
			case "css":
				return <IconBrandCss3 className="size-4 text-orange-500" />;
			default:
				return <FileIcon className="size-4" />;
		}
	};

	return (
		<span className="flex items-center gap-2 py-1 text-muted-foreground">
			{fileIcon()}
			<p>{fileName}</p>
		</span>
	);
};
