"use client";

import { useCurrentLocale } from "@/_lib/locales/client";
import { Button } from "@/app/_component/ui/button";
import { Howl } from "howler";
import { Pause, Play, Volume2 } from "lucide-react";
import { useMemo, useState } from "react";

export const HowlerWidget = () => {
	const [playing, setPlaying] = useState(false);
	const locale = useCurrentLocale();
	const src = locale === "ja" ? "voice_ja.mp3" : "voice_en.mp3";

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const sound = useMemo(
		() =>
			new Howl({
				src: [`widgets/howler/${src}`],
				html5: true,
				volume: 0.5,
				onplay() {
					setPlaying(true);
				},
				onend() {
					setPlaying(false);
				},
				onpause() {
					setPlaying(false);
				},
			}),
		[],
	);

	// const t = useI18n();

	return (
		<>
			<Volume2 className="absolute top-3 left-3 stroke-1 text-muted-foreground/50" size={20} />
			<div className="flex gap-3 text-muted-foreground">
				{playing ? (
					<Button onClick={() => sound.pause()} size="icon" variant="ghost">
						<Pause size={18} />
					</Button>
				) : (
					<Button onClick={() => sound.play()} size="icon" variant="ghost">
						<Play size={18} />
						{/* <span className="sr-only">{t("play")}</span> */}
					</Button>
				)}
			</div>
		</>
	);
};
