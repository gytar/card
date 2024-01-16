interface Technology {
    name: String,
    label: String,
    knowledge: Number,
    website: String,
    imageUrl: String,  
}
interface Experience {
    name: String,
    label: string,
    mission: String,
    company: String,
    companyWebsite: String,
    companyImageUrl: String,
    companyDescription: String,
    place: String,
    dateStart: Date,
    dateEnd: Date,
    missionDescription: String,

    technologies: Array<Technology>
}



export type { Technology, Experience };