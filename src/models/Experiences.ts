type Technology = {
    name: String,
    label: String,
    knowledge: Number,
    website: String,
    imageUrl: String,  
}
type Experience = {
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



export type { Technology, Experience };