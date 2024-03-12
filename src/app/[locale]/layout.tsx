import type { ReactNode } from "react";

import { I18nProviderClient } from "@/_lib/locales/client";
import { cn } from "@/_lib/shadcn/utils";
import { Header } from "@/app/_component/header";
import { Provider } from "@/app/_component/provider/provider";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJp = Noto_Sans_JP({
	subsets: ["latin"],
	weight: "400",
});

export default function LocaleLayout({
	children,
	params: { locale },
}: { children: ReactNode; params: { locale: string } }) {
	return (
		<html lang={locale}>
			<body className={cn("min-h-screen bg-background font-sans antialiased", notoSansJp)}>
				<Provider>
					<I18nProviderClient locale={locale}>
						<Header />
						{children}
					</I18nProviderClient>
				</Provider>
			</body>
		</html>
	);
}
