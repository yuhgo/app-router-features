"use client";

import { useI18n } from "@/_lib/locales/client";
import { Button } from "@/app/_component/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/_component/ui/form";
import { Input } from "@/app/_component/ui/input";
import { useToast } from "@/app/_component/ui/use-toast";
import { useFormGuard } from "@/app/_hook/use-form-guard";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

export const FormWidget = () => {
	const t = useI18n();
	const formSchema = z.object({
		nickname: z
			.string()
			.min(1, {
				message: t("formErrorMessages.required"),
			})
			.max(60, {
				message: t("formErrorMessages.maxLength", {
					count: 60,
				}),
			}),
		email: z
			.string()
			.min(1, {
				message: t("formErrorMessages.required"),
			})
			.email({
				message: t("formErrorMessages.invalid"),
			}),
	});
	const { toast } = useToast();
	const form = useForm<z.infer<typeof formSchema>>({
		mode: "onChange",
		resolver: zodResolver(formSchema),
		defaultValues: {
			nickname: "",
			email: "",
		},
	});

	const onSubmit = async (_values: z.infer<typeof formSchema>) => {
		return new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
			form.reset();
			toast({
				title: t("submitted"),
			});
		});
	};

	useFormGuard(form.formState.isDirty);

	return (
		<>
			<div className="py-6">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<FormField
							control={form.control}
							name="nickname"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t("nickname")}</FormLabel>
									<FormControl>
										<Input type="text" autoComplete="off" placeholder="" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t("email")}</FormLabel>
									<FormControl>
										<Input type="email" autoComplete="email" placeholder="" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button disabled={form.formState.isSubmitting || !form.formState.isValid} type="submit">
							{t("send")}
						</Button>
					</form>
				</Form>
			</div>
		</>
	);
};
