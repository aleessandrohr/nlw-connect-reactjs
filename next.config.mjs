/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	env: {
		API_URL: process.env.API_URL,
	},
};

export default nextConfig;
