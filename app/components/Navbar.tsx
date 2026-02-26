"use client";

import ThemeButton from "./ThemeButton";

export default function Navbar() {
    return (
        <nav className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <div className="flex justify-between h-16">
                <div className="flex justify-between w-full">
                    <div className="flex items-center ml-auto">
                        <ThemeButton />
                    </div>
                </div>
            </div>
        </nav>
    );
}