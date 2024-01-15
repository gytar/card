import { type Experience } from "@/models/Experiences";
import { odoo, postgresql, js, debian, docker, python, git, php, symfony, dart, flutter, redis, mysql } from "./TechnologiesData";

const ossfactory: Experience = {
    name: "ossfactory",
    label: "Développeur web à OSS Factory",
    mission: "Développeur web",
    company: "OSS Factory",
    place: "Clermont-Ferrand",
    dateStart: new Date(2022, 6, 1),
    dateEnd: new Date(2023, 8, 16),
    description: "",
    technologies: [python, odoo, js, postgresql, debian, docker, git]
}

const wellnessPrevention: Experience = {
    name: "wellness",
    label: "Développeur web et mobile à Wellness Prévention",
    mission: "Développeur web et mobile (stage)",
    company: "Wellness Prévention",
    place: "Clermont-Ferrand",
    dateStart: new Date(2021, 10, 1),
    dateEnd: new Date(2023, 2, 13),
    description: "",
    technologies: [php, symfony, dart, flutter, redis, mysql, debian, docker, git]
}

export { ossfactory, wellnessPrevention }