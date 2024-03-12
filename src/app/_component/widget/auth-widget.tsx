import { nextAuthOptions } from "@/_lib/nextAuth/options";
import { Button } from "@/app/_component/ui/button";
import { LogOut } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import type { FC } from "react";

export const AuthWidget: FC = async () => {
	const session = await getServerSession(nextAuthOptions);

	return (
		<>
			{session?.user ? (
				<Button variant="ghost" className="text-muted-foreground hover:text-accent-foreground">
					<LogOut className="mr-2 size-4" />
					<Link href="/api/auth/signout">ログアウト</Link>
				</Button>
			) : (
				<Button variant="ghost" className="text-muted-foreground hover:text-accent-foreground">
					<LogOut className="mr-2 size-4" />
					<Link href="/api/auth/signin">ログイン</Link>
				</Button>
			)}
		</>
	);
};
