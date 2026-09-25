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
            "Contribute to the modernization of Individual Pension Systems, migrating legacy CoolGen-based applications to microservices using Java, Spring Boot, Kafka, gRPC, React, and Oracle.",
            "Develop modern React-based interfaces to replace legacy screens, including workflows for individual pension exit operations.",
            "Applied AI-assisted development with a focus on model selection, context management, and token efficiency, using capable models for complex tasks and lightweight models for simpler tasks.",
            "Implement backend processes for pension exit workflows, including automated email, SMS, and document delivery following transaction completion.",
            "Participate in high-level and low-level system design, including service design, data modeling, and database schema design using PowerDesigner.",
        ],
    },
    {
        company: "Yapı Kredi Technology",
        companyVia: "via Metasis Technology",
        role: "Software Engineer",
        period: "Jun 2024 – Oct 2025",
        location: "Remote",
        bullets: [
            "Engineered the migration of capital markets and investment systems from legacy applications to microservices using Java, Spring Boot, Kafka, RabbitMQ, Redis, React, and Oracle.",
            "Delivered core workflows for the microservices transformation of the IPO platform, covering IPO management, allocation, and payment processing, including batch jobs, file generation and transfers, notifications, and integrations with core banking and provisioning systems.",
            "Built a corporate actions notification workflow for international equities, processing brokerage documents, matching events with customer portfolios, and delivering personalized email and SMS notifications for events such as dividend payments.",
            "Integrated document-based capital markets operations with the bank's workflow management platform, enabling branch-initiated and standalone transaction flows through microservices-based services.",
            "Maintained project-level code coverage requirements of at least 80% by developing unit tests for backend services and business workflows.",
        ],
    },
    {
        company: "Eczacıbaşı Bilişim",
        role: "Software Developer Intern",
        period: "Mar 2024 – May 2024",
        location: "Remote",
        bullets: [],
    },
    {
        company: "E-Commint",
        role: "Java Developer Intern",
        period: "Aug 2023 – Oct 2023",
        location: "Remote",
        bullets: [],
    },
];

export const GITHUB_URL = "https://github.com/haktanonur";
export const RESUME_URL = "/resume.pdf";