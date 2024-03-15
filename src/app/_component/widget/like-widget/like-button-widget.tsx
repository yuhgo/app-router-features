import { LikeButton } from "@/app/_component/button/like-button";
import { getLikeCount, isLiked } from "@/app/_component/widget/like-widget/action";
import type { FC } from "react";

export const LikeButtonWidget: FC = async () => {
	const _isLiked = await isLiked();
	const likeCount = await getLikeCount();

	return <LikeButton isLiked={_isLiked} likeCount={likeCount} />;
};
