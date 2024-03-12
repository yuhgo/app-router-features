import { extractYouTubeVideoId } from "@/_lib/extractYouTubeVideoId";
import { cn } from "@/_lib/shadcn/utils";
import { ThemeToggleButton } from "@/app/_component/button/theme-toggle-button";
import { Explorer } from "@/app/_component/explorer/explorer";
import { AuthWidget } from "@/app/_component/widget/auth-widget";
import { ChartWidget } from "@/app/_component/widget/chart-widget";
import { DateFormatWidget } from "@/app/_component/widget/date-format-widget";
import { HotKeyWidget } from "@/app/_component/widget/hot-key-widget";
import { ImageCropperWidget } from "@/app/_component/widget/image-cropper-widget";
import { LinkPreviewWidget } from "@/app/_component/widget/link-preview-widget";
import { LocaleSwitcherWidget } from "@/app/_component/widget/locale-switcher-widget";
import { MarqueeWidget } from "@/app/_component/widget/marquee-widget";
import { QrCodeWidget } from "@/app/_component/widget/qr-code-widget";
import { ThreeFiberWidget } from "@/app/_component/widget/three-fiber-widget";
import { VideoPlayerWidget } from "@/app/_component/widget/video-player-widget";
import { cva } from "class-variance-authority";
import type { FC, ReactNode } from "react";

export default function Page() {
	const youtubeUrl = "https://www.youtube.com/watch?v=xocnshwEbrM&ab_channel=LofiinCities";
	const youtubeVideoId = extractYouTubeVideoId(youtubeUrl) || "";

	return (
		<div className="flex gap-4 p-4">
			<aside className="hidden h-full w-56 overflow-x-auto pb-10 lg:block">
				<Explorer />
			</aside>
			<main className="flex-1">
				<div className="grid h-fit w-fit grid-cols-2 gap-4 lg:grid-cols-6 lg:gap-5">
					{/* YouTube カード */}
					<div className="relative col-span-2 lg:col-span-3 lg:row-span-2">
						<WidgetWrapper aspectRatio="video">
							<VideoPlayerWidget videoId={youtubeVideoId} />
						</WidgetWrapper>
					</div>

					<div className="col-span-1">
						<WidgetWrapper>
							<QrCodeWidget />
						</WidgetWrapper>
					</div>
					{/* いいね */}
					<div className="bg-red-200">1x1</div>
					{/* 読み上げ */}
					<div className="bg-red-200">1x1</div>
					<div className="col-span-1">
						<WidgetWrapper>
							<HotKeyWidget />
						</WidgetWrapper>
					</div>
					{/* スター */}
					<div className="col-span-2 bg-blue-200">1x2</div>

					{/* メール送信 */}
					<div className="col-span-2 bg-blue-200">1x2</div>

					<div className="col-span-1">
						<WidgetWrapper>
							<ImageCropperWidget />
						</WidgetWrapper>
					</div>

					{/* 言語切替 */}
					<div className="col-span-1">
						<WidgetWrapper aspectRatio="square">
							<LocaleSwitcherWidget />
						</WidgetWrapper>
					</div>

					{/* テーマ切り替え */}
					<div className="col-span-1">
						<WidgetWrapper aspectRatio="square">
							<ThemeToggleButton />
						</WidgetWrapper>
					</div>

					{/* 3D */}
					<div className="col-span-1">
						<WidgetWrapper aspectRatio="square">
							<ThreeFiberWidget />
						</WidgetWrapper>
					</div>

					<div className="col-span-2 row-span-1 min-h-[110px]">
						<WidgetWrapper aspectRatio="auto">
							<AuthWidget />
						</WidgetWrapper>
					</div>

					{/* チャート */}
					<div className="col-span-2">
						<WidgetWrapper aspectRatio="auto">
							<ChartWidget />
						</WidgetWrapper>
					</div>

					{/* 日付フォーマット */}
					<div className="col-span-2">
						<WidgetWrapper aspectRatio="auto">
							<DateFormatWidget />
						</WidgetWrapper>
					</div>

					{/* リンクプレビュー */}
					<div className="col-span-3">
						<WidgetWrapper aspectRatio="auto">
							<LinkPreviewWidget />
						</WidgetWrapper>
					</div>

					{/* 時計 */}
					<div className="col-span-3 bg-green-200">1x3</div>

					{/* マーキー(Marquee) */}
					<div className="col-span-6">
						<WidgetWrapper aspectRatio="auto">
							<MarqueeWidget />
						</WidgetWrapper>
					</div>

					{/* Form */}
					<div className="col-span-3 row-span-2 bg-violet-200">2x3</div>

					{/* スライダー */}
					<div className="col-span-3 row-span-2 bg-violet-200">2x3</div>

					{/* カラーテーマ */}
					<div className="bg-red-200">1x1</div>
				</div>
			</main>
		</div>
	);
}

const widgetWrapperVariants = cva(
	"relative flex aspect-square size-full flex-col items-center justify-center rounded-lg border bg-widget",
	{
		variants: {
			aspectRatio: {
				square: "aspect-square",
				video: "aspect-video",
				auto: "aspect-auto",
			},
		},
		defaultVariants: {
			aspectRatio: "square",
		},
	},
);

type WidgetWrapperProps = {
	aspectRatio?: "square" | "video" | "auto";
	children: ReactNode;
};

export const WidgetWrapper: FC<WidgetWrapperProps> = (props) => {
	const { aspectRatio, children } = props;

	return (
		// TODO: widgetのコード表示モードかつwidget選択時にoutlineを表示
		// <div className="outline-2 hover:outline-sky-500 outline-sky-500 relative size-full rounded-lg border outline outline-offset-4 transition-[outline] duration-500">
		<div className="outline-2 outline-transparent relative size-full rounded-lg outline outline-offset-4 transition-[outline] duration-500">
			{/* TODO: widgetのコード表示モードの場合に表示 */}
			{/* <span className="-top-2 -right-2 absolute z-10 hidden h-3 w-3 opacity-100 transition-opacity duration-500 lg:block">
				<span className="absolute block animate-ping rounded-full bg-sky-400" />
				<span className="absolute rounded-full bg-sky-500" />
			</span> */}

			<div
				className={cn(
					widgetWrapperVariants({
						aspectRatio,
					}),
				)}
			>
				{children}
			</div>
		</div>
	);
};
