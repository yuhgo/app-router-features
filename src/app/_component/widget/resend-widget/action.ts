"use server";

import { EmailTemplate } from "@/app/_component/widget/resend-widget/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (to: string, name?: string) => {
	const { data, error } = await resend.emails.send({
		from: "App Router Features <onboarding@resend.dev>",
		to: to,
		subject: "Hello world",
		react: EmailTemplate({ name }),
	});

	if (error) {
		throw error;
	}

	return data;
};

// biome-ignore lint/style/noDefaultExport: <explanation>
export default sendEmail;
