"use client";

import type { FC } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { cn } from "@/_lib/shadcn/utils";
import { useId, useState } from "react";
import slide1 from "/public/widgets/carousel/slide-1.jpeg";
import slide2 from "/public/widgets/carousel/slide-2.jpeg";
import slide3 from "/public/widgets/carousel/slide-3.jpeg";
import slide4 from "/public/widgets/carousel/slide-4.jpeg";
import slide5 from "/public/widgets/carousel/slide-5.jpeg";

export const CarouselWidget: FC = () => {
	const items = [slide1, slide2, slide3, slide4, slide5];
	const id = useId().replaceAll(":", "");
	const [ready, setReady] = useState(false);

	return (
		<>
			<div className="w-full py-6">
				<Swiper
					onInit={() => setReady(true)}
					modules={[Autoplay, Pagination, Navigation, A11y, Keyboard]}
					spaceBetween={20}
					keyboard={{
						enabled: true,
					}}
					navigation={{
						nextEl: "#swiper-button-next",
						prevEl: "#swiper-button-prev",
					}}
					pagination={{
						clickable: true,
						el: `#swiper-pagination-${id}`,
						renderBullet(i, className) {
							return `<button class="${className} aria-[current]:bg-primary w-2 h-2 bg-zinc-400/50 inline-block rounded-full"><span class="sr-only">Slide to ${i}</span></button>`;
						},
					}}
					slidesPerView={1.5}
					autoplay={{
						pauseOnMouseEnter: true,
					}}
					loop={true}
					centeredSlides={true}
					className={cn("relative", !ready && "opacity-0")}
				>
					{items.map((image, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<SwiperSlide key={`slide-${i}`} className="relative aspect-video overflow-hidden rounded-lg border shadow">
							<Image
								className="object-cover"
								fill={true}
								quality="100"
								src={image}
								sizes="265px"
								key={`slide-${i + 1}`}
								alt=""
							/>
						</SwiperSlide>
					))}

					<button
						type="button"
						id="swiper-button-prev"
						className="-translate-y-1/2 absolute top-1/2 left-0 z-10 grid h-10 w-10 place-content-center"
					>
						<ChevronLeft size={32} />
						<span className="sr-only">Prev</span>
					</button>
					<button
						type="button"
						id="swiper-button-next"
						className="-translate-y-1/2 absolute top-1/2 right-0 z-10 grid h-10 w-10 place-content-center"
					>
						<ChevronRight size={32} />
						<span className="sr-only">Next</span>
					</button>
				</Swiper>

				<div id={`swiper-pagination-${id}`} className="swiper-pagination mt-4 flex items-center justify-center gap-2" />
			</div>
		</>
	);
};
