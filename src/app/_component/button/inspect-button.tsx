"use client";

import { Button } from "@/app/_component/ui/button";
import { SearchCode } from "lucide-react";
import type { FC } from "react";
import { useToggle } from "usehooks-ts";

export const InspectButton: FC = () => {
	const [open, toggle, _setOpen] = useToggle(false);

	return (
		<Button
			variant="ghost"
			size="icon"
			data-inspect-state={open}
			onClick={toggle}
			className="data-[inspect-state=false]:text-muted-foreground"
		>
			<SearchCode size={20} />
		</Button>
	);
};
