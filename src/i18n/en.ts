export default {
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
                data : "Jan 2026 - Present",
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
                projectIcon : "proicons:globe"
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
                projectIcon : "proicons:globe"
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
                projectIcon : "proicons:github"
            }           
        ]
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
        ]
    }
};