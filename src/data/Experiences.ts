export type Technology = {
    name: String,
    label: String,
    knowledge: Number,
}
export type Experience = {
    name: String,
    label: String,
    mission: String,
    company: String,
    place: String,
    dateStart: Date,
    dateEnd: Date,
    description: String,
    technologies: Array<Technology>
}



