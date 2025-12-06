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
  { label: "As Três Sás", path: "/as-tres-sas" },
  { label: "Blog", path: "/blog" },
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/90 dark:bg-paper-dark/90 backdrop-blur-sm border-b border-dotted border-graphite-light">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 no-underline">
          <span className="font-script text-2xl text-ink dark:text-paper">
            Sá Marias
          </span>
          <div className="h-4 w-px bg-graphite rotate-12 hidden sm:block" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-graphite font-sans hidden sm:block">
            Vinhos Finos
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-xs font-bold uppercase tracking-widest transition-colors no-underline ${
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
            className="text-ink dark:text-paper hover:text-merlot dark:hover:text-merlot-light transition-colors"
            aria-label={
              darkMode ? "Mudar para modo claro" : "Mudar para modo escuro"
            }
            aria-pressed={darkMode}
          >
            {darkMode ? "☀" : "☾"}
          </button>
        </div>

        {/* Mobile: Theme Toggle + Burger */}
        <div className="flex md:hidden items-center gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            className="text-ink dark:text-paper hover:text-merlot dark:hover:text-merlot-light transition-colors"
            aria-label={
              darkMode ? "Mudar para modo claro" : "Mudar para modo escuro"
            }
          >
            {darkMode ? "☀" : "☾"}
          </button>

          {/* Burger Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-6 h-5 flex flex-col justify-between"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block h-0.5 w-full bg-ink dark:bg-paper transition-all duration-300 origin-center ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-ink dark:bg-paper transition-all duration-300 ${
                isMenuOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-ink dark:bg-paper transition-all duration-300 origin-center ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-paper/95 dark:bg-paper-dark/95 backdrop-blur-sm border-b border-dotted border-graphite-light ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block text-sm font-bold uppercase tracking-widest transition-colors py-2 no-underline ${
                isActive(item.path)
                  ? "text-merlot dark:text-merlot-light"
                  : "text-graphite hover:text-ink dark:hover:text-paper"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Decorative separator */}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex-1 h-px bg-graphite-light" />
            <span className="text-merlot text-xs">✦</span>
            <div className="flex-1 h-px bg-graphite-light" />
          </div>

          <p className="text-[10px] text-graphite uppercase tracking-[0.2em] text-center">
            Ritápolis • MG • Brasil
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
