import { TECH_SKILLS, METHODOLOGIES } from "@/app/lib/constants";

export default function TechBadges() {
    return (
        <section className="py-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-4">
                Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
                {TECH_SKILLS.map((skill) => (
                    <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 bg-white dark:bg-stone-900 hover:border-stone-300 dark:hover:border-stone-600 transition-colors duration-200"
                    >
                        <span
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: skill.color }}
                        />
                        {skill.name}
                    </span>
                ))}
            </div>

            <h2 className="text-sm font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-4 mt-8">
                Architecture &amp; Methodologies
            </h2>
            <div className="flex flex-wrap gap-2">
                {METHODOLOGIES.map((item) => (
                    <span
                        key={item}
                        className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 bg-white dark:bg-stone-900 hover:border-stone-300 dark:hover:border-stone-600 transition-colors duration-200"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </section>
    );
}
