import { populateSkillContainers } from './skills.js';

/** @type {HTMLElement|null} */
const skillsSection = document.querySelector('section.skills');

if (!!skillsSection) {
    populateSkillContainers(skillsSection);
}