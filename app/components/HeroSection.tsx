import Image from "next/image";
import Me from "@/public/me.jpeg";
import { SITE_OWNER, SITE_TITLE, SOCIAL_LINKS } from "@/app/lib/constants";

export default function HeroSection() {
    return (
        <div className="flex-1 pb-4 md:pb-6 lg:pb-6">
            <div className="content md:mt-2 lg:mt-4 flex flex-col items-center">
                <Image
                    alt={`Picture of ${SITE_OWNER}`}
                    src={Me}
                    className="h-44 w-44 rounded-full object-cover object-top"
                    priority
                />

                <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
                    {SITE_OWNER}
                </h3>
                <p className="text-gray-500 dark:text-gray-300">{SITE_TITLE}</p>

                <div className="flex space-x-5 pt-6">
                    {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                        >
                            <Icon className="w-8 h-8 text-amber-400 hover:text-amber-500" />
                        </a>
                    ))}
                </div>
            </div>

            <div className="content mt-6">
                <p className="mb-3">
                    I&apos;m Onur Haktan, a software engineer specialized in backend and
                    full-stack development. Currently, I&apos;m working at{" "}
                    <a
                        href="https://www.garantibbvateknoloji.com.tr/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <b>Garanti BBVA Teknoloji </b>
                    </a>
                    via Linktera, where I contribute to large-scale projects in the
                    finance and banking domains. I approach every task with
                    responsibility, a strong sense of ownership, and a continuous
                    improvement mindset. I care deeply about writing clean, maintainable
                    code, designing scalable systems, and delivering high-quality
                    software within Agile teams.
                </p>
            </div>
        </div>
    );
}
