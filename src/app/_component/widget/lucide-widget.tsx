import { Star } from "lucide-react";
import type { FC } from "react";

export const LucideWidget: FC = () => {
	return (
		<>
			<div className="mb-2 flex justify-center">
				<Star size={32} className="fill-current text-amber-400 drop-shadow" />
			</div>
			<div className="flex items-end gap-2">
				<Star className="fill-current text-amber-400" />
				<Star className="text-amber-400" />
				<Star className="stroke-1 text-amber-400" />
				<Star className="stroke-1 text-amber-400/80 [stroke-dasharray:3]" />
			</div>
		</>
	);
};
