import type { Experience } from "@/models/Experiences";

interface ExperienceCompProps {
    experience: Experience,
}
interface NextLinkProps {
    link: string,
    label: string
}

export type { ExperienceCompProps, NextLinkProps }