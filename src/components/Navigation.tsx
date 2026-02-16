"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

interface NavItem {
	label: string;
	path: string;
	isHash?: boolean;
}

const NAV_ITEMS: NavItem[] = [
	{ label: "Início", path: "/" },
	{ label: "Vinhos", path: "/vinhos" },
	{ label: "Sítio Dutra", path: "/sitio-dutra" },
	{ label: "As Três Sás", path: "/as-tres-sas" },
	{ label: "Crônicas", path: "/posts" },
	{ label: "Contato", path: "/#contato", isHash: true },
];

export function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const { darkMode, toggleTheme } = useTheme();
	const pathname = usePathname();

	useEffect(() => {
		let ticking = false;
		const handleScroll = () => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(() => {
				setIsScrolled(window.scrollY > 100);
				ticking = false;
			});
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isActive = (path: string) => {
		if (path.startsWith("#")) return false;
		if (path === "/") {
			return pathname === path;
		}
		return pathname.startsWith(path);
	};

	const handleNavClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		item: NavItem,
	) => {
		if (item.isHash) {
			// Extract hash from path (e.g., "/#vinhos" -> "#vinhos")
			const hash = item.path.includes("#")
				? `#${item.path.split("#")[1]}`
				: item.path;

			// If we're on the home page, scroll to element
			if (pathname === "/") {
				e.preventDefault();
				const element = document.querySelector(hash);
				if (element) {
					element.scrollIntoView({ behavior: "smooth", block: "start" });
				}
			}
			// Otherwise, let the browser navigate to the home page with hash
			setIsMenuOpen(false);
		}
	};

	return (
		<nav
			id="nav"
			className={`fixed top-0 left-0 right-0 z-50 nav-blur transition-all duration-300 ${
				isScrolled
					? "bg-white/95 dark:bg-black/95 shadow-lg"
					: "bg-white/90 dark:bg-black/90"
			} border-b border-gray-200/50 dark:border-gray-700/50`}
		>
			<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
				{/* Logo */}
				<Link
					href="/"
					className="flex items-center gap-4 no-underline group"
					onClick={() => setIsMenuOpen(false)}
				>
					<span className="font-script text-3xl text-ink dark:text-paper group-hover:text-merlot transition-colors">
						Sá Marias
					</span>
					<div className="h-6 w-px bg-graphite rotate-12 hidden sm:block opacity-50" />
					<span className="text-[10px] uppercase tracking-[0.2em] text-graphite font-sans hidden sm:block pt-1">
						Vinhos Finos
					</span>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center gap-8">
					{NAV_ITEMS.map((item) =>
						item.isHash ? (
							<a
								key={item.path}
								href={item.path}
								onClick={(e) => handleNavClick(e, item)}
								className="nav-link no-underline"
							>
								{item.label}
							</a>
						) : (
							<Link
								key={item.path}
								href={item.path}
								className={`nav-link no-underline ${
									isActive(item.path) ? "active" : ""
								}`}
							>
								{item.label}
							</Link>
						),
					)}

					{/* Theme Toggle */}
					<button
						type="button"
						onClick={toggleTheme}
						data-testid="theme-toggle"
						className="text-xl text-ink dark:text-paper hover:text-merlot dark:hover:text-merlot-light transition-colors ml-4"
						aria-label={
							darkMode ? "Mudar para modo claro" : "Mudar para modo escuro"
						}
					>
						{darkMode ? "☀" : "☾"}
					</button>
				</div>

				{/* Mobile: Theme Toggle + Burger */}
				<div className="flex md:hidden items-center gap-6">
					<button
						type="button"
						onClick={toggleTheme}
						className="text-ink dark:text-paper hover:text-merlot dark:hover:text-merlot-light transition-colors"
					>
						{darkMode ? "☀" : "☾"}
					</button>

					{/* Burger Menu Button */}
					<button
						id="mobile-menu-btn"
						type="button"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="flex flex-col justify-center items-center w-8 h-8 gap-1.5"
						aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
					>
						<span
							className={`block w-6 h-0.5 bg-ink dark:bg-paper transition-all duration-300 origin-center ${
								isMenuOpen
									? "rotate-45 translate-y-2 bg-merlot"
									: "group-hover:bg-merlot"
							}`}
						/>
						<span
							className={`block w-6 h-0.5 bg-ink dark:bg-paper transition-all duration-300 ${
								isMenuOpen ? "opacity-0 scale-0" : ""
							}`}
						/>
						<span
							className={`block w-6 h-0.5 bg-ink dark:bg-paper transition-all duration-300 origin-center ${
								isMenuOpen
									? "-rotate-45 -translate-y-2 bg-merlot"
									: "group-hover:bg-merlot"
							}`}
						/>
					</button>
				</div>
			</div>

			{/* Mobile Menu Dropdown */}
			<div
				id="mobile-menu"
				className={`md:hidden transition-all duration-500 ease-in-out bg-white/95 dark:bg-black/95 border-t border-gray-200 dark:border-gray-700 ${
					isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 hidden"
				}`}
			>
				<div className="px-6 py-8 space-y-4 text-center">
					{NAV_ITEMS.map((item) =>
						item.isHash ? (
							<a
								key={item.path}
								href={item.path}
								onClick={(e) => handleNavClick(e, item)}
								className="block py-2 text-lg font-serif italic text-ink dark:text-paper no-underline hover:text-merlot transition-colors"
							>
								{item.label}
							</a>
						) : (
							<Link
								key={item.path}
								href={item.path}
								onClick={() => setIsMenuOpen(false)}
								className={`block py-2 text-lg font-serif italic no-underline transition-colors ${
									isActive(item.path)
										? "text-merlot dark:text-merlot-light"
										: "text-ink dark:text-paper hover:text-merlot"
								}`}
							>
								{item.label}
							</Link>
						),
					)}
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
