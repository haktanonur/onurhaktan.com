"use client";

import ThemeButton from "./ThemeButton";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-stone-50/80 dark:bg-stone-950/80 border-b border-stone-200/50 dark:border-stone-800/50 transition-colors duration-300">
            <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-sm font-semibold tracking-tight text-stone-900 dark:text-stone-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                    OH
                </Link>
                <ThemeButton />
            </div>
        </nav>
    );
}