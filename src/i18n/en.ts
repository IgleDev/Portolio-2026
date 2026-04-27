import type { Translations } from '../types/index';

const en : Translations = {
    languageLabel: "Language",
    languageOptions: {
        es: "Spanish",
        en: "English",
        gal : "Galician"
    },
    home: {
        title: "Hello! I'm ADRIAN IGLESIAS",
        subtitle: "Full-Stack Developer",
        desc : [
            "+3 years of experience.",
            "from Galicia, Spain. Specialized in developing unique web applications."
        ],
        nav : [
            { title : "Experience" , id : "experiencia" },
            { title : "Projects" , id : "proyectos" },
            { title : "Education" , id : "educacion" },
            { title : "About me" , id : "sobre-mi" }
        ],
        studie : "Higher Technician",
        contactButtons : {
            contact : "Contact me",
            cv : "Download CV",
            LinkedIn : "LinkedIn",
            Github : "Github"
        }
    },
    experience: {
        title: "Work Experience",
        jobs : [
            {
                img : "/img/work/vexiza.webp",
                imgClass : "w-24 h-24 bg-[#DCF1DD] rounded-2xl p-2",
                title : "Full-Stack Developer",
                data : "Jan 2026 - Apr 2026",
                companyName : "Vexiza S.L",
                description : "Technical lead responsible for the development of highly critical, institution-wide web applications, focused on the management of public services and large-scale resource administration. Responsible for robust architectures that ensure security and accessibility.",
                jobInfo : {
                    url : "https://vexiza.com",
                    text : "See more"
                }
            },
            {
                img : "/img/work/adealoxica.webp",
                imgClass : "w-24 h-24 bg-[#DCE3F1] rounded-2xl flex items-center justify-center p-2",
                title : "Web and Multiplatform Developer",
                data : "Oct 2024 - Jan 2026",
                companyName : "Adealoxica Ingeniería S.L",
                description : "Responsible for the technical structure of web and mobile application development, covering Front-End, Back-End, and databases. I have created solutions used nationwide, including a mobile application implemented in a reduced timeframe and an automated invoicing system that improved efficiency and software delivery.",
                jobInfo : {
                    url : "https://adealoxicaingenieria.com",
                    text : "See more"
                }
            }
        ]
    },
    projects : {
        title : "Projects",
        projectList : [
            {
                projectTitle : "QR Vicus",
                projectDesc : "📲 Mobile QR app to manage gym access quickly.",
                projectDescLong : "Mobile application for managing the check-in and check-out of people across multiple gyms in Vigo and nearby areas, using QR codes for a fast and efficient process.",
                projectTech : [
                    { name : "NativeScript", icon : "nativescript" },
                    { name : "Angular", icon : "vscode-icons:file-type-angular" },
                    { name : "TypeScript", icon : "vscode-icons:file-type-typescript" },
                ],
                projectGithub : "",
                projectUrl : "https://play.google.com/store/apps/details?id=com.adealoxica.qrviscus&hl=es_419",
                projectIcon : "proicons:globe",
                projectInfo : "See it here!",
                projectImg : [
                    { src : "/img/projects/qrvicusLog.webp", alt : "QR Vicus" },
                ]
            },
            {
                projectTitle : "A Tapa Celeste",
                projectDesc : "🖥️ Supporters club website with events, photos, and merchandising.",
                projectDescLong : "Website dedicated to the Celta supporters club \"A Tapa Celeste\", providing information about the group, events, activities, contact details, merchandising, photos of our members, and more.",
                projectTech : [
                    { name : "React", icon : "vscode-icons:file-type-reactjs" },
                    { name : "Node.js", icon : "vscode-icons:file-type-node" },
                    { name : "Express", icon : "express" },
                    { name : "Stripe", icon : "stripe" }
                ],
                projectGithub : "",
                projectUrl : "https://atapaceleste.gal",
                projectIcon : "proicons:globe",
                projectInfo : "See it here!",
                projectImg : [
                    { src : "/img/projects/atapaceleste.webp", alt : "A Tapa Celeste" },
                ]
            },
            {
                projectTitle : "My Reserve",
                projectDesc : "✂️ Simple digital system to manage hair salon bookings.",
                projectDescLong : "Project designed for managing reservations in hair salons, replacing the traditional method with a digitalized, simple, and intuitive system.",
                projectTech : [
                    { name : ".NET", icon : "net" },
                    { name : "C#", icon : "vscode-icons:file-type-csharp" },
                    { name : "JavaScript", icon : "vscode-icons:file-type-light-js" },
                    { name : "SQL Server", icon : "vscode-icons:file-type-mysql"}
                ],
                projectGithub : "https://github.com/IgleDev/MyReserve",
                projectUrl : "",
                projectIcon : "proicons:github",
                projectInfo : "See it here!",
                projectImg : [
                    { src : "/img/projects/myreserve.webp", alt : "My Reserve" },
                ]
            }           
        ],
        projectTech : "Technologies"
    },
    education : {
        title : "Education & Certifications",
        educationList : [
            {
                logo : "/img/education/fpfomento.webp",
                siteName : "F.P Montecastelo",
                date : "Sep 2022 - Dec 2024",
                title : "Higher Technician in Web Application Development",
                description : "Higher education cycle focused on web application development",
                conocimientos : "Knowledge",
                conocimientosList : [
                    { title : "Web & Server Development", tech : "JavaScript, React, .NET" },
                    { title : "Databases", tech : "SQL Server"},
                    { title : "Development Environments", tech : "Git, GitHub, Docker"}
                ]
            },
            {
                logo: "/img/education/fpfomento.webp",
                siteName: "F.P Montecastelo",
                date: "Sep 2020 - Jun 2022",
                title: "Associate Degree in Microcomputer Systems and Networks",
                description: "Mid-level cycle focused on the fundamentals of networking and systems",
                conocimientos: "Knowledge",
                conocimientosList: [
                    { title: "Programming", tech: "Visual Basic, HTML, CSS, JavaScript" },
                    { title: "Networking", tech: "Cisco, Network Protocols" },
                    { title: "Operating Systems", tech: "Networked, Linux" },
                    { title: "Hardware Assembly", tech: "Hardware, Arduino" },
                ],
                seeMore : "See more",
                seeLess : "See less"
            },
            {
                logo: "/img/education/udemy.webp",
                urlCert: "https://www.udemy.com/certificate/UC-2c8360d8-4da3-464a-b427-a722302e992a/",
                siteName: "Udemy",
                date: "Feb 2025 - Jan 2026",
                title: "React and TypeScript",
                description: "The complete guide creating +10 practical projects",
                conocimientos: "Knowledge",
                conocimientosList: [
                    { title: "Context", tech: "Context API" },
                    { title: "API", tech: "Zustand, Zod, MongoDB" },
                    { title: "Router", tech: "React Router DOM" },
                    { title: "Hooks", tech: "useReducer, useContext, useState" },
                ],
                seeMore: "See more",
                seeLess: "See less"
            },
            {
                logo: "/img/education/udemy.webp",
                urlCert: "https://www.udemy.com/certificate/UC-e3213d1f-6e4a-41d2-afe9-7bdbb8bd68d6/",
                siteName: "Udemy",
                date: "Sept 2023 - Feb 2025",
                title: "Master TailwindCSS",
                description: "From zero to expert in TailwindCSS with real projects",
                conocimientos: "Knowledge",
                conocimientosList: [
                    { title: "TailwindCSS v4", tech: "TailwindCSS" },
                    { title: "TailwindCSS v3", tech: "TailwindCSS" },
                    { title: "Basic Foundations", tech: "CSS" },
                ],
            },
            {
                logo: "/img/education/udemy.webp",
                urlCert: "https://www.udemy.com/certificate/UC-3d23da76-0544-47da-b6a5-e8a10ba6c4a6/",
                siteName: "Udemy",
                date: "Sept 2023 - Feb 2024",
                title: "Bootstrap 5: Complete course from scratch",
                description: "The complete Bootstrap 5 course, practical and from zero",
                conocimientos: "Knowledge",
                conocimientosList: [
                    { title: "Positioning", tech: "Flex, Grid, Position" },
                    { title: "Components", tech: "Components, Forms" },
                    { title: "Utilities", tech: "Utility classes" },
                ],
            },
            {
                logo: "/img/education/udemy.webp",
                urlCert: "https://www.udemy.com/certificate/UC-2c17eb03-ea02-4f3d-af40-96e171d38e59/",
                siteName: "Udemy",
                date: "Sept 2023 - Oct 2023",
                title: "TypeScript without borders",
                description: "The definitive guide to TypeScript from scratch",
                conocimientos: "Knowledge",
                conocimientosList: [
                    { title: "Typing", tech: "Basic, Advanced" },
                    { title: "Object-Oriented Programming", tech: "Classes, Interfaces, Inheritance, Decorators" },
                    { title: "Integrations", tech: "Node, React" },
                ],
            }
        ]
    },
    about : {
        title : "About me",
        desc : [
            "My name is Adrián Iglesias, although my devs call me <span class=\"text-[#DADADA]\">Igle</span>. I started programming in Visual Basic, and since then I haven't stopped.",
            "Today I have <span class=\"text-[#DADADA]\">3 years developing</span> web and mobile applications for the <span class=\"text-[#DADADA]\">Fintech sector</span>",
            "When I'm not programming, I'm probably with my cat Zelda."
        ]
    }
};

export default en;