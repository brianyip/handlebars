import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	typedRoutes: true,
	images: {
		formats: ["image/avif", "image/webp"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
	compress: true,
	poweredByHeader: false,
	reactStrictMode: true,
	experimental: {
		optimizeCss: true,
	},
	headers: async () => [
		{
			source: "/:path*",
			headers: [
				{
					key: "X-DNS-Prefetch-Control",
					value: "on",
				},
				{
					key: "Strict-Transport-Security",
					value: "max-age=63072000; includeSubDomains; preload",
				},
				{
					key: "X-Content-Type-Options",
					value: "nosniff",
				},
				{
					key: "X-Frame-Options",
					value: "DENY",
				},
				{
					key: "X-XSS-Protection",
					value: "1; mode=block",
				},
				{
					key: "Referrer-Policy",
					value: "origin-when-cross-origin",
				},
			],
		},
		{
			source: "/(.*)\\.(jpg|jpeg|png|gif|ico|webp|svg|avif)",
			headers: [
				{
					key: "Cache-Control",
					value: "public, max-age=31536000, immutable",
				},
			],
		},
		{
			source: "/(.*)\\.(js|css|ttf|woff|woff2)",
			headers: [
				{
					key: "Cache-Control",
					value: "public, max-age=31536000, immutable",
				},
			],
		},
	],
};

export default nextConfig;
