import Image from "next/image";
import { unfurl } from "unfurl.js";

export const LinkPreviewWidget = async () => {
	const url = "https://nextjs.org";
	const result = await unfurl(url);
	const imageUrl = result.open_graph.images?.[0].url || result.twitter_card?.images?.[0].url;

	return (
		<>
			{imageUrl ? (
				<div className="relative flex w-full items-center gap-3 p-5">
					{imageUrl && (
						<div>
							<div className="relative aspect-square w-20 shrink-0 overflow-hidden rounded-md">
								<Image src={imageUrl} unoptimized={true} alt="" fill={true} className="object-cover" />
							</div>
						</div>
					)}
					<div className="flex-1 overflow-hidden">
						<h1 className="mb-2 truncate font-bold leading-none">
							<a href={url} target="_blank" rel="noreferrer">
								{result.open_graph.title || result.title}
								<span className="absolute inset-0" />
							</a>
						</h1>
						<p className="truncate text-muted-foreground text-sm">{result.open_graph.description}</p>
						<p className="mt-2 truncate text-muted-foreground/60 text-sm leading-none">{url}</p>
					</div>
				</div>
			) : (
				<a href={url} target="_blank" rel="noreferrer">
					{url}
				</a>
			)}
		</>
	);
};
