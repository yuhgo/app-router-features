import type { FC } from "react";

import { AppConfig } from "@/_lib/app.config";
import { QRCodeSVG } from "qrcode.react";

export const QrCode: FC = () => {
	return (
		<>
			<div className="max-w-[128px] p-3">
				<QRCodeSVG
					className="h-full max-h-full w-full max-w-full"
					bgColor="transparent"
					fgColor="hsl(var(--muted-foreground))"
					value={AppConfig.sns.x}
				/>
			</div>
		</>
	);
};
