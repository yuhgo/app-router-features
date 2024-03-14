"use client";

import { useI18n } from "@/_lib/locales/client";
import { Button } from "@/app/_component/ui/button";
import { useToast } from "@/app/_component/ui/use-toast";
import sendEmail from "@/app/_component/widget/resend-widget/action";
import { Send } from "lucide-react";
import { Mail } from "lucide-react";
import { useSession } from "next-auth/react";
import { useFormStatus } from "react-dom";

export const ResendWidget = () => {
	const t = useI18n();
	// const { user } = useUser();
	const { data: session } = useSession();
	const { toast } = useToast();

	const user = session?.user;

	const submit = async () => {
		if (user) {
			const to = user.email;

			if (!to) {
				alert("You must have a primary email address to resend the email.");
				return;
			}

			const userName = user?.name ?? "";

			await sendEmail(to, userName).then(() => {
				toast({
					title: t("sentEmail"),
				});
			});
		} else {
			alert(t("mustLoggedIn"));
		}
	};

	return (
		<>
			<form action={submit}>
				<p className="absolute top-3 left-3 flex items-center gap-2 text-muted-foreground text-xs">
					<Mail size={20} className="stroke-1" />
					{user?.email ? <span className="truncate">to: {user?.email}</span> : <span>{t("mustLoggedIn")}</span>}
				</p>
				<div className="text-center">
					<SubmitButton disabled={!user} />
				</div>
			</form>
		</>
	);
};

function SubmitButton({ disabled }: { disabled: boolean }) {
	const t = useI18n();
	const { pending } = useFormStatus();

	return (
		<Button
			type="submit"
			variant="ghost"
			size="icon"
			className="gap-2 text-muted-foreground"
			disabled={disabled || pending}
		>
			{/* <span className="sr-only">{t("send")}</span> */}
			<Send size={16} />
		</Button>
	);
}
