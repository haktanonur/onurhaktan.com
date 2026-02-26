import { GithubIcon, LinkedInIcon, EmailIcon } from "@/app/components/icons";
import { FaMedium } from "react-icons/fa";
import type { SocialLink, TechBadge } from "./types";

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

export const TECH_BADGES: TechBadge[] = [
    { alt: "Java", src: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" },
    { alt: "Spring", src: "https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white" },
    { alt: "Hibernate", src: "https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white" },
    { alt: "Apache Maven", src: "https://img.shields.io/badge/Apache%20Maven-C71A36?style=for-the-badge&logo=Apache%20Maven&logoColor=white" },
    { alt: "Docker", src: "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" },
    { alt: "ReactJS", src: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" },
    { alt: "JavaScript", src: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" },
    { alt: "C#", src: "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white" },
    { alt: ".Net", src: "https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white" },
    { alt: "Redis", src: "https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white" },
    { alt: "RabbitMQ", src: "https://img.shields.io/badge/Rabbitmq-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white" },
    { alt: "Apache Kafka", src: "https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka" },
    { alt: "Git", src: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" },
];

export const GITHUB_URL = "https://github.com/haktanonur";
