import { extractYouTubeVideoId } from "@/_lib/extractYouTubeVideoId";
import { Explorer } from "@/app/_component/explorer/explorer";
import { HotKeyWidget } from "@/app/_component/widget/hot-key-widget";
import { ImageCropperWidget } from "@/app/_component/widget/image-cropper-widget";
import { QrCodeWidget } from "@/app/_component/widget/qr-code-widget";
import { VideoPlayerWidget } from "@/app/_component/widget/video-player-widget";
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
					<div className="relative col-span-2 aspect-video lg:col-span-3 lg:row-span-2 lg:aspect-auto">
						<div className="outline-2 outline-transparent relative size-full rounded-md outline outline-offset-4 transition-[outline] duration-500">
							<VideoPlayerWidget videoId={youtubeVideoId} />
						</div>
					</div>

					<div className="inset-0 col-span-1 aspect-square">
						<WidgetWrapper>
							<QrCodeWidget />
						</WidgetWrapper>
					</div>

					<div className="bg-red-200">1x1</div>
					<div className="bg-red-200">1x1</div>
					<div className="inset-0 col-span-1 aspect-square">
						<WidgetWrapper>
							<HotKeyWidget />
						</WidgetWrapper>
					</div>
					<div className="col-span-2 bg-blue-200">1x2</div>
					<div className="col-span-2 bg-blue-200">1x2</div>

					<div className="inset-0 col-span-1 aspect-square">
						<WidgetWrapper>
							<ImageCropperWidget />
						</WidgetWrapper>
					</div>

					<div className="bg-red-200">1x1</div>
					<div className="bg-red-200">1x1</div>
					<div className="bg-red-200">1x1</div>
					<div className="col-span-2 bg-blue-200">1x2</div>
					<div className="col-span-2 bg-blue-200">1x2</div>
					<div className="col-span-2 bg-blue-200">1x2</div>
					<div className="col-span-3 bg-green-200">1x3</div>
					<div className="col-span-3 bg-green-200">1x3</div>
					<div className="col-span-6 bg-orange-200">1x6</div>
					<div className="col-span-6 bg-orange-200">1x6</div>
					<div className="col-span-3 row-span-2 bg-violet-200">2x3</div>
				</div>
			</main>
		</div>
	);
}

type WidgetWrapperProps = {
	children: ReactNode;
};

export const WidgetWrapper: FC<WidgetWrapperProps> = (props) => {
	const { children } = props;

	return (
		// TODO: widgetのコード表示モードかつwidget選択時にoutlineを表示
		// <div className="outline-2 hover:outline-sky-500 outline-sky-500 relative size-full rounded-lg border outline outline-offset-4 transition-[outline] duration-500">
		<div className="outline-2 outline-transparent relative size-full rounded-lg outline outline-offset-4 transition-[outline] duration-500">
			{/* TODO: widgetのコード表示モードの場合に表示 */}
			{/* <span className="-top-2 -right-2 absolute z-10 hidden h-3 w-3 opacity-100 transition-opacity duration-500 lg:block">
				<span className="absolute inset-0 block animate-ping rounded-full bg-sky-400" />
				<span className="absolute inset-0 rounded-full bg-sky-500" />
			</span> */}

			<div className="relative inset-0 flex aspect-square size-full flex-col items-center justify-center rounded-lg border bg-red-300 bg-widget">
				{children}
			</div>
		</div>
	);
};
