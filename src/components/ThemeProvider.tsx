"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "sa-marias-theme";

// Helper to get theme from storage/system
const getThemeFromStorage = (): boolean => {
  if (typeof window === "undefined") return false;

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved !== null) {
    return saved === "dark";
  }
  // Detect browser/system preference
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

// Apply theme to document
const applyTheme = (isDark: boolean) => {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  const body = document.body;

  if (isDark) {
    root.classList.add("dark");
    body?.classList.add("dark");
  } else {
    root.classList.remove("dark");
    body?.classList.remove("dark");
  }

  root.style.colorScheme = isDark ? "dark" : "light";
};

// Subscribe to theme changes (for useSyncExternalStore)
const subscribeToTheme = (callback: () => void) => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handleChange = () => {
    if (localStorage.getItem(STORAGE_KEY) === null) {
      callback();
    }
  };

  // Listen for storage changes (cross-tab sync)
  const handleStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      callback();
    }
  };

  mediaQuery.addEventListener("change", handleChange);
  window.addEventListener("storage", handleStorage);

  return () => {
    mediaQuery.removeEventListener("change", handleChange);
    window.removeEventListener("storage", handleStorage);
  };
};

// Get snapshot for useSyncExternalStore
const getSnapshot = () => getThemeFromStorage();

// Server snapshot (always false for SSR)
const getServerSnapshot = () => false;

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Use useSyncExternalStore for hydration-safe theme state
  const darkModeFromStore = useSyncExternalStore(
    subscribeToTheme,
    getSnapshot,
    getServerSnapshot
  );

  const [darkMode, setDarkMode] = useState(darkModeFromStore);

  // Sync internal state with external store
  useEffect(() => {
    setDarkMode(darkModeFromStore);
  }, [darkModeFromStore]);

  // Apply theme to document when it changes
  useEffect(() => {
    applyTheme(darkMode);
  }, [darkMode]);

  // Only persist when user explicitly toggles
  const toggleTheme = () => {
    const newValue = !darkMode;
    localStorage.setItem(STORAGE_KEY, newValue ? "dark" : "light");
    setDarkMode(newValue);
    applyTheme(newValue);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
