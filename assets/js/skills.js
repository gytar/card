/**
 * Program to create the container for skills
 */
/**
 * Skills JSON data transformed into an object
 */
const SKILLS = await fetch('assets/js/data/skills.json').then((response) => response.json()).then((data) => data)

/**
 * 
 * @param {Object} skill
 * @param {string} skill.imgSrc
 * @param {string} skill.name 
 * @returns {HTMLImageElement} the image created
 */
const createImgFromSkill = skill => {
    const img = document.createElement('img');
    img.src = skill.imgSrc;
    img.alt = skill.name;
    img.style.maxHeight = "40px";
    return img
}

/**
 * 
 * @param {HTMLDivElement} bar 
 * @param {Object} skill 
 * @param {number} skill.rate
 */
const createRatioElement = (bar, skill) => {
    const ratioEl = document.createElement('div');
    ratioEl.classList.add('skill-ratio');
    // Width of ratio is `rate * bar's width` (use getBoundingClientRect to get width after CSS transforms if any)
    const width = skill.rate * bar.getBoundingClientRect().width;
    ratioEl.style.width = `${width}px`;
    if (skill.rate === 1) {
        ratioEl.style.borderRadius = ".2em";
    }
    bar.appendChild(ratioEl);
}

/**
 * 
 * @param {HTMLDivElement} nameDiv 
 * @param {object} skill 
 * @param {string} skill.name
 * @param {string} skill.type
 */
const addTitle = (nameDiv, skill) => {
    if (window.innerWidth > 1023 || skill.type === "language") {
        nameDiv.innerText = skill.name;
    } else {
        nameDiv.remove();
    }
}

/**
 * @param {HTMLElement} section
 */
const populateSkillContainers = (section) => {
    /** @type {NodeListOf<HTMLDivElement>} */
    const containers = section.querySelectorAll(".skill-container");

    containers.forEach(container => {
        /** @type {{rate: number, imgSrc: string, name: string, containerTitle: string, type: string, comment: string}} */
        const skill = SKILLS[container.dataset.skillName];
        const logoDiv = container.querySelector("div.skill-logo");
        const barDiv = container.querySelector("div.skill-bar");
        const nameDiv = container.querySelector("div.skill-name");

        addTitle(nameDiv, skill);
        createRatioElement(barDiv, skill);
        if (logoDiv !== null) {
            logoDiv.appendChild(createImgFromSkill(skill));
        }
    });
}

export { populateSkillContainers };