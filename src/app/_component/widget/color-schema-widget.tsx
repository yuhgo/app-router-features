import type { FC } from "react";

export const ColorSchemaWidget: FC = () => {
	return (
		<div className="grid w-fit grid-cols-3 gap-1">
			<div className="size-4 rounded-sm bg-foreground">{/* <span className="sr-only">Text</span> */}</div>

			<div className="size-4 rounded-sm bg-primary">{/* <span className="sr-only">Primary</span> */}</div>

			<div className="size-4 rounded-sm bg-border">{/* <span className="sr-only">Border</span> */}</div>

			<div className="size-4 rounded-sm bg-muted">{/* <span className="sr-only">Muted</span> */}</div>

			<div className="size-4 rounded-sm bg-destructive">{/* <span className="sr-only">Destructive</span> */}</div>
		</div>
	);
};
