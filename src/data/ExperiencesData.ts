import { type Experience } from "@/models/Experiences";
import { odoo, postgresql, js, debian, docker, python, git, php, symfony, dart, flutter, redis, mysql, java, android, springBoot, angular, nodeJS, electron } from "@/data/TechnologiesData";
import ossFactoryImgUrl from '@/assets/img/ossfactory.webp';
import wellnessPreventionImgUrl from '@/assets/img/wellness-prevention.webp';
import humanBoosterImgUrl from '@/assets/img/humanbooster.svg';
import cyberfullImgUrl from '@/assets/img/cyberfull.webp';
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

const humanBooster: Experience = {
    name: "humanbooster",
    label: "Formation de CDA à Human Booster",
    mission: "Concepteur Développeur d'applications web et mobile",
    company: "Human Booster",
    companyWebsite: "https://humanbooster.com/",
    companyImageUrl: humanBoosterImgUrl,
    place: "Clermont-Ferrand",
    dateStart: new Date(2022, 2, 15),
    dateEnd: new Date(2023, 1, 14),
    missionDescription: `<ul>
        <li>Formation de développeur</li>
        <li>Annexes: préparation de soutenance, rédation d'un rapport, cours de théâtre pour préparer un exposé</li>
        <li>Cours non développement : Histoire de l'informatique, UX/UI, Algorithmique, UML, conception de base de données</li>
    </ul>`,
    companyDescription: "Human Booster est un centre de formation pour les développeurs dans la région Auvergne Rhône Alpes",
    technologies: [php, java, android, js, symfony, springBoot, angular, electron, nodeJS, mysql, docker, debian]
}

const cyberfull: Experience = {
    name: "cyberfull",
    label: "POEI Cybersécurité et développement", 
    mission: "POEI Cybersécurité et développement",
    company: "Cyberfull", 
    companyWebsite: "https://www.cyber-full.fr", 
    companyImageUrl: cyberfullImgUrl, 
    place: "Clermont-Ferrand",
    dateStart: new Date(2021, 10, 15),
    dateEnd: new Date(2022, 2, 14),
    missionDescription: `<ul>
        <li>Apprentissage des textes de loi sur le numérique, pentesting et bases de la cybersécurité</li>
        <li>Programmation en Java, MySQL, PHP et Bash</li>
        <li>Intriduction au protocoles et au réseau</li>
    </ul>`,
    companyDescription: "Cyberfull est un centre de formation clermontois spécialisé dans la cybersécrité."
    technologies: [java, docker, debian, git, mysql],
}

export { ossfactory, wellnessPrevention, humanBooster, cyberfull }
