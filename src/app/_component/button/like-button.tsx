"use client";

import { useI18n } from "@/_lib/locales/client";
import { cn } from "@/_lib/shadcn/utils";
import { Button } from "@/app/_component/ui/button";
import { useToast } from "@/app/_component/ui/use-toast";
import { toggleLike } from "@/app/_component/widget/like-widget/action";
import { Heart } from "lucide-react";
import { useSession } from "next-auth/react";
import { type FC, startTransition, useOptimistic } from "react";

type LikeButtonProps = {
	isLiked: boolean;
	likeCount: number;
	disabled?: boolean;
};

export const LikeButton: FC<LikeButtonProps> = (props) => {
	const { isLiked, likeCount: defaultLikeCount, disabled } = props;

	const [liked, setLiked] = useOptimistic(isLiked, (_, newState: boolean) => newState);
	const [likeCount, setLikeCount] = useOptimistic(
		defaultLikeCount,
		(state: number, action: "increment" | "decrement") => state + (action === "increment" ? 1 : -1),
	);
	const t = useI18n();
	const { data: session } = useSession();
	const userId = session?.user?.id;
	const { toast } = useToast();

	return (
		<Button
			variant="ghost"
			disabled={disabled}
			onClick={() => {
				if (userId) {
					toggleLike(!liked);
					startTransition(() => {
						setLikeCount(liked ? "decrement" : "increment");
						setLiked(!liked);
					});
				} else {
					toast({
						title: t("mustLoggedIn"),
					});
				}
			}}
			className="text-muted-foreground"
		>
			<Heart size={18} className={cn("mr-2", liked && "fill-current text-pink-600")} />
			<span className="tabular-nums">{likeCount}</span>
			<span className="sr-only">{t("like")}</span>
		</Button>
	);
};
