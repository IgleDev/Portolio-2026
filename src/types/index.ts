export interface NavItem {
    title: string;
    id: string;
    external? : boolean
}

export interface ContactButtons {
    contact: string;
    cv: string;
    LinkedIn: string;
    Github: string;
}

export interface ProjectTech {
    name: string;
    icon: string;
}

export interface ProjectImage {
    src: string;
    alt: string;
}

export interface Project {
    projectTitle: string;
    projectDesc: string;
    projectDescLong: string;
    projectTech: ProjectTech[];
    projectGithub: string;
    projectUrl: string;
    projectIcon: string;
    projectInfo: string;
    projectImg: ProjectImage[];
    projectInformation : string[]
}

export interface JobInfo {
    url: string;
    text: string;
}

export interface ConocimientoItem {
    title: string;
    tech: string;
}

export interface Job {
    img: string;
    imgClass: string;
    title: string;
    data: string;
    companyName: string;
    description: string;
    jobInfo: JobInfo;
}

export interface EducationItem {
    logo: string;
    siteName: string;
    date: string;
    title: string;
    description: string;
    conocimientos: string;
    conocimientosList: ConocimientoItem[];
    urlCert?: string;
    seeMore?: string;
    seeLess?: string;
}

export interface Translations {
    languageLabel: string;
    languageOptions: {
        es: string;
        en: string;
        gal: string;
    };
    home: {
        title: string;
        subtitle: string;
        desc: [string, string];
        studie: string;
        nav: NavItem[];
        contactButtons: ContactButtons;
    };
    experience: {
        title: string;
        jobs: Job[];
    };
    projects: {
        title: string;
        projectList: Project[];
        projectTech: string;
        projectInfoResult : string[];
    };
    education: {
        title: string;
        educationList: EducationItem[];
    };
    about: {
        title: string;
        desc: string[];
    };
}

export interface iBlog {
    title : string,
    type : string,
    dateCreated : string,
    timeRead : string,
    imgBlog : string,
    titleHref : string
    paragraph : string[],
}