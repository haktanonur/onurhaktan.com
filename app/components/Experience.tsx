import { EXPERIENCE } from "@/app/lib/constants";

export default function Experience() {
    return (
        <section className="py-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-6">
                Experience
            </h2>

            <div className="stagger-children space-y-4">
                {EXPERIENCE.map((job) => (
                    <div
                        key={`${job.company}-${job.period}`}
                        className="p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900"
                    >
                        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                            <div>
                                <h3 className="text-[15px] font-medium text-stone-900 dark:text-stone-100">
                                    {job.role}
                                </h3>
                                <p className="text-sm text-stone-500 dark:text-stone-400">
                                    {job.company}
                                    {job.companyVia ? ` · ${job.companyVia}` : ""}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-stone-400 dark:text-stone-500">
                                    {job.period}
                                </p>
                                <p className="text-xs text-stone-400 dark:text-stone-500">
                                    {job.location}
                                </p>
                            </div>
                        </div>

                        <ul className="mt-3 space-y-1.5">
                            {job.bullets.map((bullet, i) => (
                                <li
                                    key={i}
                                    className="text-sm leading-relaxed text-stone-600 dark:text-stone-400 pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-stone-300 dark:before:text-stone-600"
                                >
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
