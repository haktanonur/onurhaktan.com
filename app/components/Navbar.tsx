"use client";

import { useEffect, useState } from "react";
import ThemeButton from "./ThemeButton";
import Link from "next/link";

const NAV_LINKS = [
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
];

export default function Navbar() {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-96px 0px -55% 0px", threshold: 0 }
        );

        NAV_LINKS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-stone-50/80 dark:bg-stone-950/80 border-b border-stone-200/50 dark:border-stone-800/50 transition-colors duration-300">
            <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-sm font-semibold tracking-tight text-stone-900 dark:text-stone-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                    OH
                </Link>

                <div className="flex items-center gap-4 sm:gap-6">
                    {NAV_LINKS.map(({ id, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={`text-xs sm:text-sm font-medium transition-colors ${
                                activeId === id
                                    ? "text-amber-600 dark:text-amber-400"
                                    : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
                            }`}
                        >
                            {label}
                        </a>
                    ))}
                </div>

                <ThemeButton />
            </div>
        </nav>
    );
}
