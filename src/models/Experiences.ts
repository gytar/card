enum TechnologyType {
    Language = "lang",
    FrontEndFramework = "frontend",
    BackEndFramework = "backend",
    Database = "database",
    DevOps = "devops",
    Library = "libraries",
    ERP = "erp",
    Mobile = "mobile",
    Others = "others",
    
}

interface Technology {
    name: String,
    label: String,
    knowledge: Number,
    website: String,
    imageUrl: String,  
    type: TechnologyType,
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


export { TechnologyType };
export type { Technology, Experience };