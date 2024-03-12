"use client";

import { useCurrentLocale } from "@/_lib/locales/client";
import { Button } from "@/app/_component/ui/button";
import {
	differenceInDays,
	format,
	formatDistanceToNow,
	subDays,
	subHours,
	subMinutes,
	subMonths,
	subSeconds,
	subYears,
} from "date-fns";
import { enUS, ja } from "date-fns/locale";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const DateFormatWidget = () => {
	const d = new Date();
	const dates = [subSeconds(d, 30), subMinutes(d, 30), subHours(d, 3), subDays(d, 3), subMonths(d, 3), subYears(d, 3)];
	const [target, setTarget] = useState(0);
	const locale = useCurrentLocale();
	const formattedDate = getRelativeDateFormat(dates[target], locale === "ja");

	return (
		<>
			<div className="absolute top-2 left-2 flex gap-0.5">
				<Button onClick={() => setTarget((v) => v - 1)} disabled={target === 0} size="icon" variant="ghost">
					<span className="sr-only">Previous</span>
					<ChevronLeft />
				</Button>
				<Button
					onClick={() => setTarget((v) => v + 1)}
					disabled={target === dates.length - 1}
					size="icon"
					variant="ghost"
				>
					<span className="sr-only">Next</span>
					<ChevronRight />
				</Button>
			</div>
			<time className="text-muted-foreground text-sm">{formattedDate}</time>
		</>
	);
};

const getRelativeDateFormat = (date: Date, isJa: boolean) => {
	const diffInDays = differenceInDays(new Date(), date);

	if (diffInDays < 8) {
		return formatDistanceToNow(date, {
			locale: isJa ? ja : enUS,
			addSuffix: true,
		});
	}
	if (diffInDays < 365) {
		return format(date, isJa ? "MM月dd日" : "MMM dd");
	}
	return format(date, isJa ? "yyyy年MM月dd日" : "MMM dd, yyyy");
};
