"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";

export const ClockWidget = () => {
	const [now, setNow] = useState<number>();

	useEffect(() => {
		const timer = setInterval(() => {
			setNow(Date.now());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	if (!now) {
		return null;
	}

	return (
		<>
			<time className="tabular-nums">{format(now, "HH:mm:ss")}</time>
		</>
	);
};
