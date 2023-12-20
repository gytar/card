/**
 * Program to create ratio bar for skills
 */
/**
 * Skills JSON data transformed into an object
 */
const SKILLS = await fetch('assets/js/data/skills.json').then((response) => response.json()).then((data) => data)

/**
 * 
 * @param {Object} skill
 * @param {string} skill.imgSrc
 * @param {string} skill.imgAlt 
 * @returns 
 */
const createImgFromSkill = skill => {
    const img = document.createElement('img');
    // img.classList.add();
    img.src = skill.imgSrc;
    img.alt = skill.imgAlt;
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
    ratioEl.width = skill.rate * bar.getBoundingClientRect().width;
    bar.appendChild(ratioEl);
}

/**
 * 
 * @param {HTMLDivElement} optionalComment 
 * @param {object} skill 
 * @param {string} skill.comment
 */
const createOptionalComment = (optionalComment, skill) => {
    optionalComment.innerText = skill.comment;
}

/**
 * @param {HTMLElement} section
 */
const populateSkillContainers = (section) => {
    /** @type {NodeListOf<HTMLDivElement>} */
    const containers = section.querySelectorAll(".skill-container");

    containers.forEach(container => {
        /** @type {{rate: number, imgSrc: string, imgAlt: string, containerTitle: string, type: string, comment: string}} */
        const skill = SKILLS[container.dataset.skillName];
        const logoDiv = container.querySelector("div.skill-logo");
        const barDiv = container.querySelector("div.skill-bar");
        const optionalCommentDiv = container.querySelector("div.skill-optional-comment");

        logoDiv.appendChild(createImgFromSkill(skill));
        createRatioElement(barDiv, skill);
        createOptionalComment(optionalCommentDiv, skill);
    });
}

export { populateSkillContainers };