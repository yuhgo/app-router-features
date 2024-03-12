import {
	SiBun,
	SiCloudflare,
	SiGithub,
	SiNextdotjs,
	SiPlanetscale,
	SiPrisma,
	SiRadixui,
	SiReact,
	SiStripe,
	SiTailwindcss,
	SiVercel,
} from "@icons-pack/react-simple-icons";
import { Slot } from "@radix-ui/react-slot";
import Marquee from "react-fast-marquee";

const icons = [
	{
		icon: <SiNextdotjs />,
		label: "Next.js",
	},
	{
		icon: <SiBun />,
		label: "Bun",
	},
	{
		icon: <SiPlanetscale />,
		label: "PlanetScale",
	},
	{
		icon: <SiReact />,
		label: "React",
	},
	{
		icon: <SiTailwindcss />,
		label: "Tailwind CSS",
	},
	{
		icon: <SiRadixui />,
		label: "Radix UI",
	},
	{
		icon: <SiVercel />,
		label: "Vercel",
	},
	{
		icon: <SiGithub />,
		label: "GitHub",
	},
	{
		icon: <SiCloudflare />,
		label: "Cloudflare R2",
	},
	{
		icon: <SiPrisma />,
		label: "Prisma",
	},
	{
		icon: <SiStripe />,
		label: "Stripe",
	},
];

export const MarqueeWidget = async () => {
	// const t = await getI18n();

	return (
		<>
			<div className="w-full overflow-hidden py-8">
				{/* <span className="sr-only">{t("usedInThisApp")}</span> */}
				<Marquee gradient={true} gradientColor="hsl(var(--widget))" className="text-muted-foreground">
					{icons.map((icon) => (
						<div key={icon.label} className="mx-6">
							<Slot className="h-10 w-10">{icon.icon}</Slot>
						</div>
					))}
				</Marquee>
			</div>
		</>
	);
};
