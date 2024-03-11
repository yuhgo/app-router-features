import type { FC } from "react";

import { ImageCropper } from "@/app/_component/image-cropper";

export const ImageCropperWidget: FC = () => {
	return (
		<>
			<div className="w-[96px]">
				<ImageCropper width={240} />
			</div>
		</>
	);
};
