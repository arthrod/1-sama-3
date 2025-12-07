"use client";

// Define the type locally or import it
interface WineProductProps {
	name: string;
	year: string;
	type: string;
	region: string;
	price: number;
	image: string;
	slug: string;
}

interface WineCardProps {
	product: WineProductProps;
}

export function WineCard({ product }: WineCardProps) {
	return (
		<div className="group relative bg-paper dark:bg-paper-dark border-2 border-transparent hover:border-graphite-lighter dark:hover:border-graphite transition-colors duration-500 min-h-[500px] h-auto flex flex-col">
			{/* Strict Dotted Border Container */}
			<div
				className={`
        absolute top-4 left-4 right-4 bottom-4
        border-2 border-dotted
        transition-colors duration-500 pointer-events-none z-20
        border-graphite dark:border-graphite-light opacity-40 group-hover:border-merlot group-hover:dark:border-merlot-light group-hover:opacity-100
      `}
			></div>

			{/* Image Section */}
			<div className="relative flex-1 flex items-center justify-center p-8 md:p-12 overflow-hidden min-h-[350px]">
				{/* Background Texture */}
				<div className="absolute inset-0 bg-paper-200 dark:bg-ink opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

				{product.image ? (
					// eslint-disable-next-line @next/next/no-img-element
					<img
						src={product.image}
						alt={product.name}
						className={`
                h-64 md:h-80 w-auto object-contain
                filter grayscale contrast-125
                group-hover:grayscale-0 group-hover:contrast-100
                transition-all duration-700 ease-in-out z-10
                scale-100 group-hover:scale-110 drop-shadow-xl
            `}
					/>
				) : (
					<div className="flex flex-col items-center justify-center z-10 opacity-50">
						<span className="font-script text-4xl mb-2">Sá Marias</span>
						<span className="text-xs uppercase tracking-widest">
							Sem Imagem
						</span>
					</div>
				)}

				{/* Floating Year */}
				<div className="absolute top-8 right-8 z-10">
					<span className="font-serif text-5xl text-graphite/20 dark:text-paper/10 font-bold select-none group-hover:text-merlot/20 transition-colors">
						{product.year}
					</span>
				</div>
			</div>

			{/* Content Section */}
			<div className="relative z-10 pb-12 px-8 text-center bg-transparent">
				<div className="space-y-4">
					<div className="flex flex-col items-center">
						<span className="text-[10px] uppercase tracking-[0.3em] text-graphite dark:text-graphite-light font-sans mb-3 block">
							{product.region}
						</span>
						<div className="w-8 h-px bg-merlot/50 dark:bg-merlot-light/50 mb-3 group-hover:w-16 transition-all duration-500"></div>
					</div>

					<h3 className="font-script text-5xl text-ink dark:text-paper leading-none transition-colors duration-300">
						{product.name}
					</h3>

					<p className="font-serif text-base italic text-ink-faint dark:text-graphite-lighter transition-colors duration-300">
						{product.type}
					</p>

					<div className="pt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
						<button
							type="button"
							className="
              bg-ink dark:bg-paper-200 text-paper dark:text-ink px-8 py-3
              font-serif italic text-lg
              hover:bg-merlot dark:hover:bg-merlot-light dark:hover:text-white transition-colors duration-300
              shadow-sharp w-full md:w-auto
            "
						>
							{new Intl.NumberFormat("pt-BR", {
								style: "currency",
								currency: "BRL",
							}).format(product.price)}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
