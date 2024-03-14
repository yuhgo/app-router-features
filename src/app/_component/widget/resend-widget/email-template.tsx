type EmailTemplateProps = {
	name?: string;
};

export const EmailTemplate = ({ name }: EmailTemplateProps) => {
	return (
		<div>
			{name && <h1>Welcome, {name}!</h1>}
			{!name && <h1>Welcome!</h1>}
			<p>This email is a test email.</p>
		</div>
	);
};
