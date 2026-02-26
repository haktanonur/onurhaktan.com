export interface Project {
    _id: string;
    title: string;
    overview: string;
    link: string;
    imageUrl: string;
}

export interface SocialLink {
    href: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
}

export interface TechBadge {
    alt: string;
    src: string;
}
