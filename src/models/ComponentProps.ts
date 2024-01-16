import type { Experience } from "@/models/Experiences";

interface ExperienceCompProps {
    experience: Experience,
}
interface NextLinkProps {
    link: string,
    label: string
}

interface ContactIcon {
    href: string,
    title: string,
    icon: string,
}

export type { ExperienceCompProps, NextLinkProps, ContactIcon }