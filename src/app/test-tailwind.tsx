"use client";

export default function TestTailwind() {
	return (
		<div className="p-8 space-y-8">
			<h1 className="text-3xl font-bold mb-4">Tailwind Migration Test</h1>

			{/* Test Custom Colors */}
			<section>
				<h2 className="text-xl font-semibold mb-2">Custom Colors</h2>
				<div className="grid grid-cols-3 gap-4">
					<div className="p-4 bg-paper text-ink">Paper Background</div>
					<div className="p-4 bg-paper-200 text-ink-light">
						Paper-200 Background
					</div>
					<div className="p-4 bg-paper-dark text-paper">
						Paper Dark Background
					</div>
					<div className="p-4 bg-merlot text-paper">Merlot Background</div>
					<div className="p-4 bg-graphite text-paper">Graphite Background</div>
					<div className="p-4 bg-graphite-lighter text-ink">
						Graphite Lighter
					</div>
				</div>
			</section>

			{/* Test Custom Fonts */}
			<section>
				<h2 className="text-xl font-semibold mb-2">Custom Fonts</h2>
				<p className="font-serif text-lg">
					This uses font-serif (Playfair Display)
				</p>
				<p className="font-sans text-lg">This uses font-sans (Lato)</p>
				<p className="font-script text-2xl">
					This uses font-script (Great Vibes)
				</p>
			</section>

			{/* Test Custom Shadows */}
			<section>
				<h2 className="text-xl font-semibold mb-2">Custom Shadows</h2>
				<div className="grid grid-cols-2 gap-4">
					<div className="p-6 bg-paper shadow-paper-lift">
						Paper Lift Shadow
					</div>
					<div className="p-6 bg-paper shadow-sharp">Sharp Shadow</div>
				</div>
			</section>

			{/* Test Background Image */}
			<section>
				<h2 className="text-xl font-semibold mb-2">Background Image</h2>
				<div className="p-8 bg-paper-texture bg-paper h-32 flex items-center justify-center">
					Paper Texture Background
				</div>
			</section>

			{/* Test Animations */}
			<section>
				<h2 className="text-xl font-semibold mb-2">Animations</h2>
				<div className="space-y-2">
					<div className="p-4 bg-paper animate-fade-in">Fade In Animation</div>
					<div className="p-4 bg-paper animate-fade-in-up">
						Fade In Up Animation
					</div>
				</div>
			</section>

			{/* Test Dark Mode */}
			<section className="dark">
				<h2 className="text-xl font-semibold mb-2">Dark Mode Test</h2>
				<div className="p-4 bg-paper-dark text-paper">
					This should have dark background with light text in dark mode
				</div>
			</section>
		</div>
	);
}
