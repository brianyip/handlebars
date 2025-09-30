import Image from "next/image";
import { structuredData } from "@/lib/metadata";

export default function Home() {
	return (
		<>
			{/* Structured Data for SEO */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(structuredData)
				}}
			/>

			<div className="relative min-h-screen w-full overflow-hidden">
				{/* Background Image */}
				<div className="absolute inset-0 z-0">
					<Image
						src="/hero-background.webp"
						alt="Marketing strategy background"
						fill
						priority
						sizes="100vw"
						quality={85}
						className="object-cover brightness-[0.7]"
					/>
				</div>

				{/* Content Container */}
				<div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
					{/* Combined Card */}
					<div className="w-full max-w-4xl overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
						{/* Main Content Section */}
						<div className="bg-[#f5f0e8] px-6 py-10 sm:px-10 sm:py-14 md:px-16 md:pt-20 md:pb-16">
							<h1 className="tracking-tight mb-4 sm:mb-6 md:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.2] sm:leading-[1.1] text-gray-900">
								<span className="block">Your embedded offline</span>
								<span className="block">marketing partner.</span>
							</h1>

							<p className="mb-6 sm:mb-8 md:mb-10 max-w-2xl text-base sm:text-lg leading-[1.5] sm:leading-[1.6] text-gray-600">
								<span className="block sm:inline">Handlebars is a boutique offline marketing agency for fast-growing startups.</span>
								<span className="block mt-2 sm:inline sm:mt-0"> We plan, buy, and attribute radio, podcast, TV, out-of-home (OOH), and influencer campaigns so you can test faster and achieve better results.</span>
							</p>

							<a
								href="https://mustang-trojan.notion.site/27d0067fe09880f9812cf3c302d5ba1b?pvs=105"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block"
								aria-label="Schedule a consultation with Handlebars"
							>
								<button
									className="bg-[#2c2c2c] hover:bg-[#1c1c1c] text-white px-5 py-2.5 sm:px-7 sm:py-3 rounded-md text-sm sm:text-base font-medium cursor-pointer transition-colors w-full sm:w-auto"
								>
									Let's Talk!
								</button>
							</a>
						</div>

						{/* Partner Logos Section */}
						<div className="bg-[#3a3a3a] px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12">
							<p className="mb-4 sm:mb-6 text-xs sm:text-sm font-medium uppercase tracking-wider text-gray-400 text-center sm:text-left">
								Who We Work With
							</p>

							<div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-8 md:gap-12">
								{/* Rugiet Logo */}
								<a
									href="https://www.rugiet.com/"
									target="_blank"
									rel="noopener noreferrer"
									className="cursor-pointer transition-opacity hover:opacity-70"
									aria-label="Visit Rugiet website"
								>
									<Image
										src="/logo-rugiet.webp"
										alt="Rugiet - Partner of Handlebars Marketing Agency"
										width={301}
										height={59}
										className="h-8 sm:h-9 md:h-10 w-auto brightness-0 invert"
										quality={100}
										loading="lazy"
									/>
								</a>

							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}