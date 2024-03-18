"use server";

import { nextAuthOptions } from "@/_lib/nextAuth/options";
import { prisma } from "@/_lib/prisma";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { cache } from "react";

export const isLiked = cache(async (): Promise<boolean> => {
	const session = await getServerSession(nextAuthOptions);
	const userId = session?.user?.id ?? "";

	const user = await prisma.user.findUnique({
		where: {
			id: userId,
		},
	});
	const _isLiked = user?.isLiked ?? false;

	return _isLiked;
});

export const getLikeCount = cache(async (): Promise<number> => {
	const widget = await prisma.likeWidget.findUnique({
		where: {
			id: "demo",
		},
	});

	const currentLikeCount = widget?.count ?? 0;

	return currentLikeCount;
});

export const toggleLike = cache(async (status: boolean): Promise<void> => {
	const session = await getServerSession(nextAuthOptions);
	const userId = session?.user?.id;

	await prisma.user.update({
		where: {
			id: userId,
		},
		data: {
			isLiked: status,
		},
	});

	await prisma.likeWidget.update({
		where: {
			id: "demo",
		},
		data: {
			count: {
				increment: status ? 1 : -1,
			},
		},
	});

	revalidatePath("/");
});
