import Image from "next/image";
import Me from "@/public/me.jpeg";
import { SITE_OWNER, SITE_TITLE, SOCIAL_LINKS } from "@/app/lib/constants";

export default function HeroSection() {
    return (
        <section className="pt-16 pb-8 animate-fade-in">
            <div className="flex flex-col items-center text-center">
                <div className="relative">
                    <Image
                        alt={`Picture of ${SITE_OWNER}`}
                        src={Me}
                        className="h-28 w-28 rounded-full object-cover object-top ring-2 ring-stone-200 dark:ring-stone-700"
                        priority
                    />
                </div>

                <h1 className="mt-5 text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
                    {SITE_OWNER}
                </h1>
                <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                    {SITE_TITLE}
                </p>

                <div className="flex items-center gap-4 mt-5">
                    {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="text-stone-400 hover:text-amber-600 dark:text-stone-500 dark:hover:text-amber-400 transition-colors duration-200"
                        >
                            <Icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>
            </div>

            <div className="mt-10 max-w-xl mx-auto">
                <p className="text-[15px] leading-relaxed text-stone-600 dark:text-stone-400">
                    I&apos;m Onur Haktan, a software engineer specialized in backend and
                    full-stack development. Currently, I contribute to large-scale projects in the
                    finance and banking domains. I approach every task with
                    responsibility, a strong sense of ownership, and a continuous
                    improvement mindset.
                </p>
            </div>
        </section>
    );
}
