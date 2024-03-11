"use client";

import { cn } from "@/_lib/shadcn/utils";
import { Button } from "@/app/_component/ui/button";
import { Dialog, DialogClose, DialogContent } from "@/app/_component/ui/dialog";
import { Slider } from "@/app/_component/ui/slider";
import { ImagePlus, X } from "lucide-react";
import Image from "next/image";
import { type FC, useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import { useDropzone } from "react-dropzone";

type ImageCropperProps = {
	aspectRatio?: number;
	width: number;
	defaultValue?: string | null;
	onCrop?: (value: string) => void;
	onDelete?: () => void;
};

export const ImageCropper: FC<ImageCropperProps> = (props) => {
	const { aspectRatio = 1, width, defaultValue, onCrop, onDelete } = props;

	const editor = useRef<AvatarEditor>(null);
	const [preview, setPreview] = useState<string>(defaultValue || "");
	const { getRootProps, getInputProps, isDragAccept } = useDropzone({
		noKeyboard: true,
		maxSize: 1024 * 1024 * 2,
		accept: {
			"image/jpeg": [],
			"image/png": [],
		},
		onDropAccepted: (dropped) => {
			setImage(dropped[0]);
			setScale(1.0);
			setOpen(true);
		},
	});

	const [image, setImage] = useState<File>();
	const [scale, setScale] = useState(1.0);
	const [open, setOpen] = useState(false);

	const cropImage = async () => {
		const dataUrl = editor.current?.getImage().toDataURL("image/png");
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		const result = await resizeBase64Img(dataUrl!, width, width / aspectRatio);
		setOpen(false);
		setPreview(result);
		onCrop?.(result);
	};

	return (
		<div>
			<div
				className={cn(
					"relative grid cursor-pointer place-content-center overflow-hidden rounded-md border border-dashed",
					isDragAccept ? "border-primary" : "border-border",
				)}
				style={{
					aspectRatio,
				}}
				{...getRootProps()}
			>
				{!preview && <ImagePlus className="h-10 w-10 stroke-1 text-muted-foreground opacity-40" />}
				{preview && <Image className="object-cover" fill={true} src={preview} alt="" />}
				<input {...getInputProps()} className="hidden" />

				{preview && (
					<Button
						type="button"
						className="absolute top-1 right-1 h-6 w-6 rounded border bg-muted/90 text-muted-foreground hover:bg-muted"
						size="icon"
						onClick={(e) => {
							e.stopPropagation();
							setPreview("");
							onDelete?.();
						}}
					>
						<span className="sr-only">{"deleteImage"}</span>
						<X size={14} />
					</Button>
				)}
			</div>

			<Dialog open={open} onOpenChange={(status) => setOpen(status)}>
				<DialogContent className="max-w-md">
					<div
						className="relative overflow-hidden rounded-lg border"
						style={{
							aspectRatio,
						}}
					>
						{image && (
							<AvatarEditor
								className="absolute inset-0 max-h-full max-w-full"
								scale={scale}
								ref={editor}
								width={1000}
								height={1000 / aspectRatio}
								image={image}
							/>
						)}
					</div>

					<div className="my-4">
						<Slider max={2} step={0.01} min={1} defaultValue={[1]} onValueChange={([value]) => setScale(value)} />
					</div>

					<div className="flex justify-end gap-2">
						<DialogClose asChild={true}>
							<Button variant="outline">{"close"}</Button>
						</DialogClose>
						<Button onClick={cropImage}>{"crop"}</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

function resizeBase64Img(base64: string, width: number, height: number) {
	return new Promise<string>((resolve, reject) => {
		const img = document.createElement("img");

		img.onload = () => {
			const canvas = document.createElement("canvas");
			canvas.width = width;
			canvas.height = height;
			const ctx = canvas.getContext("2d");
			ctx?.drawImage(img, 0, 0, width, height);
			resolve(canvas.toDataURL());
		};

		img.onerror = (err) => {
			reject(err);
		};

		img.src = base64;
	});
}
