import { GithubIcon, LinkedInIcon, EmailIcon } from "@/app/components/icons";
import { FaMedium } from "react-icons/fa";
import type { SocialLink, TechSkill, Experience } from "./types";

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
    { name: "SQL", color: "#64748B" },
    { name: "gRPC", color: "#4285F4" },
    { name: "Apache Kafka", color: "#231F20" },
    { name: "RabbitMQ", color: "#FF6600" },
    { name: "Redis", color: "#DC382D" },
    { name: "Oracle", color: "#F80000" },
    { name: "Docker", color: "#2496ED" }
];

export const METHODOLOGIES: string[] = [
    "Microservices",
    "REST APIs",
    "Event-Driven Architecture",
    "OOP",
    "SOLID",
    "Design Patterns",
    "Unit Testing",
    "Agile/Scrum"
];

export const EXPERIENCE: Experience[] = [
    {
        company: "Garanti BBVA Technology",
        companyVia: "via Linktera",
        role: "Software Engineer",
        period: "Oct 2025 – Present",
        location: "Remote",
        bullets: [
            "Migrating legacy CoolGen applications to Java/Spring Boot microservices for Individual Pension Systems, using Kafka, gRPC, React, and Oracle.",
            "Build React-based interfaces and backend workflows for pension exit operations, including automated notifications and document generation.",
            "Participate in system design, data modeling, and database schema design using PowerDesigner.",
        ],
    },
    {
        company: "Yapı Kredi Technology",
        companyVia: "via Metasis Technology",
        role: "Software Engineer",
        period: "Jun 2024 – Oct 2025",
        location: "Remote",
        bullets: [
            "Engineered the migration of capital markets and investment systems to microservices using Java, Spring Boot, Kafka, RabbitMQ, Redis, React, and Oracle.",
            "Delivered core workflows for the IPO platform's microservices transformation — allocation, payment processing, batch jobs, and integrations with core banking systems.",
            "Built a corporate actions notification workflow for international equities and maintained 80%+ backend test coverage.",
        ],
    },
    {
        company: "Eczacıbaşı Bilişim",
        role: "Software Developer Intern",
        period: "Mar 2024 – May 2024",
        location: "Remote",
        bullets: [
            "Performed functional testing and reported software defects to support quality assurance processes.",
        ],
    },
    {
        company: "E-Commint",
        role: "Java Developer Intern",
        period: "Aug 2023 – Oct 2023",
        location: "Remote",
        bullets: [
            "Contributed to the development of e-commerce applications using Java and Spring Boot.",
        ],
    },
];

export const GITHUB_URL = "https://github.com/haktanonur";
export const RESUME_URL = "/resume.pdf";