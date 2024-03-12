/** @type {import('next').NextConfig} */
const nextConfig = {
	redirects: () => {
		return [
			{
				source: "/",
				destination: "/ja",
				permanent: true,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
