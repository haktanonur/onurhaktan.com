import { GithubIcon, LinkedInIcon, EmailIcon } from "@/app/components/icons";
import { FaMedium } from "react-icons/fa";
import type { SocialLink, TechSkill } from "./types";

export const SITE_OWNER = "Onur Haktan";
export const SITE_TITLE = "Software Engineer";

export const SOCIAL_LINKS: SocialLink[] = [
    {
        href: "https://github.com/haktanonur",
        label: "GitHub",
        icon: GithubIcon,
    },
    {
        href: "https://www.linkedin.com/in/onur-haktan/",
        label: "LinkedIn",
        icon: LinkedInIcon,
    },
    {
        href: "mailto:onurhaktann@gmail.com",
        label: "Email",
        icon: EmailIcon,
    },
    {
        href: "https://medium.com/@onurhaktan",
        label: "Medium",
        icon: FaMedium,
    },
];

export const TECH_SKILLS: TechSkill[] = [
    { name: "Java", color: "#ED8B00" },
    { name: "Spring Boot", color: "#6DB33F" },
    { name: "React", color: "#61DAFB" },
    { name: "Apache Kafka", color: "#231F20" },
    { name: "RabbitMQ", color: "#FF6600" },
    { name: "Redis", color: "#DC382D" },
    { name: "Docker", color: "#2496ED" },
    { name: "Git", color: "#F05033" },
];

export const METHODOLOGIES: string[] = [
    "Microservices",
    "REST APIs",
    "OOP",
    "SOLID",
    "Design Patterns",
    "DDD",
    "TDD",
    "Agile/Scrum",
    "Clean Architecture",
    "Hexagonal Architecture",
];

export const GITHUB_URL = "https://github.com/haktanonur";