import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "../index.css";
import Providers from "@/components/providers";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Handlebars | Your Offline Marketing Partner",
	description: "Handlebars is a boutique offline marketing agency specializing in radio, podcast, TV, OOH, and influencer campaigns. We help startups test faster and achieve better results with data-driven attribution.",
	keywords: "offline marketing, marketing agency, radio advertising, podcast advertising, TV advertising, OOH advertising, out-of-home advertising, influencer marketing, startup marketing, growth marketing, attribution, marketing analytics",
	authors: [{ name: "Handlebars" }],
	creator: "Handlebars",
	publisher: "Handlebars",
	metadataBase: new URL("https://www.handlebars.co"),
	alternates: {
		canonical: "https://www.handlebars.co",
	},
	openGraph: {
		title: "Handlebars | Your Offline Marketing Partner",
		description: "Boutique offline marketing agency specializing in radio, podcast, TV, OOH, and influencer campaigns. Test faster and achieve better results.",
		url: "https://www.handlebars.co",
		siteName: "Handlebars",
		images: [
			{
				url: "https://www.handlebars.co/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Handlebars - Your embedded offline marketing partner",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Handlebars | Your Offline Marketing Partner",
		description: "Boutique offline marketing agency specializing in radio, podcast, TV, OOH, and influencer campaigns.",
		site: "@handlebarsco",
		creator: "@handlebarsco",
		images: ["https://www.handlebars.co/og-image.jpg"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "google-site-verification-code",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
			>
				<Providers>
					{children}
				</Providers>
				<Analytics />
			</body>
		</html>
	);
}
