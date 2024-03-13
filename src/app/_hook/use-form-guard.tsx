import { useI18n } from "@/_lib/locales/client";
import { useEffect } from "react";

export const useFormGuard = (isDirty: boolean) => {
	const t = useI18n();

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (isDirty && event.target instanceof Element && event.target.closest('a:not([target="_blank"]')) {
				if (!window.confirm(t("formGuardMessage"))) {
					event.preventDefault();
					event.stopPropagation();
				}
			}
		};

		const handleBeforeUnload = (event: BeforeUnloadEvent) => {
			if (isDirty) {
				event.preventDefault();
				// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
				return (event.returnValue = "");
			}
		};

		window.addEventListener("beforeunload", handleBeforeUnload);
		window.addEventListener("click", handleClick, true);

		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload);
			window.removeEventListener("click", handleClick, true);
		};
	}, [isDirty, t]);
};
