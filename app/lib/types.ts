export interface Project {
    _id: string;
    title: string;
    overview: string;
    link?: string;
    imageUrl?: string;
    tags?: string[];
}

export interface SocialLink {
    href: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
}

export interface TechSkill {
    name: string;
    color: string;
}

export interface Experience {
    company: string;
    companyVia?: string;
    role: string;
    period: string;
    location: string;
    bullets: string[];
}
