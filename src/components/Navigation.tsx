"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

interface NavItem {
  label: string;
  path: string;
}

const NAV_ITEMS: NavItem[] = [
	{ label: "Início", path: "/" },
	{ label: "Vinhos", path: "/vinhos" }, // Added
	{ label: "As Três Sás", path: "/as-tres-sas" },
	{ label: "Crônicas", path: "/posts" }, // Shortened for design balance
	{ label: "Admin", path: "/keystatic" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
			<nav className="fixed top-0 left-0 right-0 z-50 bg-paper/95 dark:bg-paper-dark/95 backdrop-blur-md border-b border-dotted border-graphite-light">
				<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-4 no-underline group">
						<span className="font-script text-3xl text-ink dark:text-paper group-hover:text-merlot transition-colors">
							Sá Marias
						</span>
						<div className="h-6 w-px bg-graphite rotate-12 hidden sm:block opacity-50" />
						<span className="text-[10px] uppercase tracking-[0.2em] text-graphite font-sans hidden sm:block pt-1">
							Vinhos Finos
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-10">
						{NAV_ITEMS.map((item) => (
							<Link
								key={item.path}
								href={item.path}
								className={`text-xs font-bold uppercase tracking-widest transition-all no-underline hover:scale-105 ${
									isActive(item.path)
										? "text-merlot dark:text-merlot-light"
										: "text-graphite hover:text-ink dark:hover:text-paper"
								}`}
							>
								{item.label}
							</Link>
						))}

						{/* Theme Toggle */}
						<button
							type="button"
							onClick={toggleTheme}
							data-testid="theme-toggle"
							className="text-ink dark:text-paper hover:text-merlot dark:hover:text-merlot-light transition-colors ml-4"
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
							type="button"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="relative w-6 h-5 flex flex-col justify-between group"
							aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
						>
							<span
								className={`block h-0.5 w-full bg-ink dark:bg-paper transition-all duration-300 origin-center ${
									isMenuOpen
										? "rotate-45 translate-y-2 bg-merlot"
										: "group-hover:bg-merlot"
								}`}
							/>
							<span
								className={`block h-0.5 w-full bg-ink dark:bg-paper transition-all duration-300 ${
									isMenuOpen ? "opacity-0 scale-0" : "group-hover:bg-merlot"
								}`}
							/>
							<span
								className={`block h-0.5 w-full bg-ink dark:bg-paper transition-all duration-300 origin-center ${
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
					className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-paper dark:bg-paper-dark border-b border-dotted border-graphite-light ${
						isMenuOpen
							? "max-h-screen opacity-100 shadow-xl"
							: "max-h-0 opacity-0"
					}`}
				>
					<div className="px-6 py-8 space-y-6 flex flex-col items-center">
						{NAV_ITEMS.map((item) => (
							<Link
								key={item.path}
								href={item.path}
								onClick={() => setIsMenuOpen(false)}
								className={`block text-lg font-serif italic transition-colors py-2 no-underline ${
									isActive(item.path)
										? "text-merlot dark:text-merlot-light scale-110"
										: "text-ink dark:text-paper"
								}`}
							>
								{item.label}
							</Link>
						))}

						{/* Decorative separator */}
						<div className="w-16 h-px bg-merlot/30 my-4" />

						<p className="text-[10px] text-graphite uppercase tracking-[0.2em] text-center">
							Ritápolis • MG
						</p>
					</div>
				</div>
			</nav>
		);
}

export default Navigation;