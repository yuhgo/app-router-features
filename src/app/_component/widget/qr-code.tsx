import type { FC } from "react";

import { AppConfig } from "@/_lib/app.config";
import { QRCodeSVG } from "qrcode.react";

export const QrCode: FC = () => {
	return (
		<>
			<div className="p-3">
				<QRCodeSVG
					className="size-full"
					bgColor="transparent"
					fgColor="hsl(var(--muted-foreground))"
					value={AppConfig.sns.x}
				/>
			</div>
		</>
	);
};
