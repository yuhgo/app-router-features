import { YouTubeEmbed } from "@next/third-parties/google";
import type { FC } from "react";

type VideoPlayerProps = {
	videoId: string;
};

export const VideoPlayer: FC<VideoPlayerProps> = (props) => {
	const { videoId } = props;

	return (
		<>
			<div>
				<YouTubeEmbed
					videoid={videoId}
					params="controls=1"
					style={`
          background-image: url('https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg');
          border-radius: 1rem;
					width: 100%; height: 100%;
          background-color: transparent;
          `}
				/>
			</div>
		</>
	);
};
