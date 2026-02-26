import { TECH_BADGES } from "@/app/lib/constants";

export default function TechBadges() {
    return (
        <div className="mb-3">
            <h3 className="pb-2 text-2xl font-bold leading-8 tracking-tight">
                Technologies &amp; Tools
            </h3>
            <div className="flex flex-wrap gap-2 pt-2">
                {TECH_BADGES.map((badge) => (
                    <img key={badge.alt} alt={badge.alt} src={badge.src} />
                ))}
            </div>
        </div>
    );
}
