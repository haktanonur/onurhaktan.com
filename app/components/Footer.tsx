import { SITE_OWNER, SOCIAL_LINKS } from "@/app/lib/constants";

export default function Footer() {
    return (
        <footer className="mt-16 pt-8 border-t border-stone-200 dark:border-stone-800">
            <div className="flex flex-col items-center gap-4 pb-8">
                <div className="flex items-center gap-4">
                    {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="text-stone-400 hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300 transition-colors duration-200"
                        >
                            <Icon className="w-4 h-4" />
                        </a>
                    ))}
                </div>
                <p className="text-xs text-stone-400 dark:text-stone-600">
                    © {new Date().getFullYear()} {SITE_OWNER}
                </p>
            </div>
        </footer>
    );
}
