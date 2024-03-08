import { Explorer } from "@/app/_component/explorer/explorer";
import { Button } from "@/app/_component/ui/button";

export default function Page() {
	return (
		<div className="flex gap-4 p-4">
			<aside className="hidden h-full w-56 overflow-x-auto pb-10 lg:block">
				<Explorer />
			</aside>
			<main>
				<h1>Hello World🚀</h1>
				<Button>Click me</Button>
			</main>
		</div>
	);
}
