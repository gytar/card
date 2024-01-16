import { type Experience } from "@/models/Experiences";
import { odoo, postgresql, js, debian, docker, python, git, php, symfony, dart, flutter, redis, mysql } from "./TechnologiesData";
import ossFactoryImgUrl from '@/assets/img/ossfactory.webp';
import wellnessPreventionImgUrl from '@/assets/img/wellness-prevention.webp';

const ossfactory: Experience = {
    name: "ossfactory",
    label: "Développeur web à OSS Factory",
    mission: "Développeur web",
    company: "OSS Factory",
    companyWebsite: "https://www.ossfactory.com",
    companyImageUrl: ossFactoryImgUrl,
    place: "Clermont-Ferrand",
    dateStart: new Date(2022, 5, 1),
    dateEnd: new Date(2023, 7, 16),
    missionDescription: `<ul>
    <li>- Développement de fonctionnalités dans Odoo<li/>
    <li>- Documentation technique pour les utilisateurs</li>
    <li>- Veille informatique pour les nouvelles fonctionnalités et choix de technologies</li>
    </ul>`,
    companyDescription: "OSS Factory est une entreprise qui créé des ERP (ou progiciels) pour des TPE/PME adaptés à leurs besoins.",
    technologies: [python, odoo, js, postgresql, debian, docker, git]
}

const wellnessPrevention: Experience = {
    name: "wellness",
    label: "Développeur web et mobile en stage à Wellness Prévention",
    mission: "Développeur web et mobile (stage)",
    company: "Wellness Prévention",
    companyWebsite: "https://wellness-prevention.fr/",
    companyImageUrl: wellnessPreventionImgUrl,
    place: "Clermont-Ferrand",
    dateStart: new Date(2022, 9, 1),
    dateEnd: new Date(2023, 1, 13),
    missionDescription: `<ul>
    <li>- Développement d'une API et d'un back end en Symfony</li>
    <li>- Développement d'application mobile en Flutter</li>
    <li>- Conceptualisation UI/UX sur Figma</div></li>
    </ul>`,
    companyDescription: "Wellness Prévention est une startup clermontoise qui créé des applications dans la prévention santé en entreprise.",
    technologies: [php, symfony, dart, flutter, redis, mysql, debian, docker, git]
}

export { ossfactory, wellnessPrevention }