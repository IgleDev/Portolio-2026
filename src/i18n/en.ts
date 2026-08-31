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
            "+2 years of experience.",
            "from Galicia, Spain. Specialized in developing unique web applications."
        ],
        nav : [
            { title : "Experience" , id : "experiencia" },
            { title : "Projects" , id : "proyectos" },
            { title : "Education" , id : "educacion" },
            { title : "About me" , id : "sobre-mi" },
            { title : "Blog", id : "/blog", external : true }
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
                projectTitle : "Brétema Formación",
                projectDate : "2026-07-21",
                projectDesc: "Specialized online courses. Training designed to boost your digital skills.",
                projectDescLong : "Specialized online courses and learning packs in Artificial Intelligence, Big Data, and Web Development. Learn at your own pace, earn your certificate, and let us take care of the rest. You just choose what you want to learn.",
                projectTech : [
                    { name : "Astro", icon : "vscode-icons:file-type-astro" },
                    { name : "Typescript", icon : "vscode-icons:file-type-typescript" },
                    { name : "Resend", icon : "resend" },
                ],
                projectGithub : "",
                projectUrl : "https://formacion.bretemahr.com/",
                projectIcon : "proicons:globe",
                projectInfo : "Check it out here!",
                projectImg : [
                    { src : "/img/projects/bretemaformacion.webp", alt : "Bretema Formación" },
                ],
                projectInformation : [
                    "I contributed to the development of Brétema HR's online learning platform, helping create a modern, intuitive, and user-focused experience.",
                    "The goal was to provide a platform where anyone could easily access specialized training while simplifying the enrollment process and access to course content.",
                    "I contributed to frontend development, feature integration, and UX/UI optimization, working closely with the client to tailor the platform to their needs.",
                    "The result is a platform that enables Brétema HR to manage its training catalog and provide a professional learning experience for its students."
                ]
            },
            {
                projectTitle : "Inkly",
                projectDate : "2026-07-01",
                projectDesc : "Digital platform to write, publish and discover stories.",
                projectDescLong : "Project designed as a writing-focused social network, where users can create, share and explore stories from other authors in a simple and intuitive space.",
                projectTech : [
                    { name : "React", icon : "vscode-icons:file-type-reactjs" },
                    { name : "Node.js", icon : "vscode-icons:file-type-node" },
                    { name : "Express", icon : "express" },
                    { name : "MongoDB", icon : "vscode-icons:file-type-mongo"}
                ],
                projectGithub : "https://github.com/IgleDev/Inkly",
                projectUrl : "https://inkly-dev.vercel.app/",
                projectIcon : "proicons:github",
                projectInfo : "Check it out here!",
                projectImg : [
                    { src : "/img/projects/inkly.webp", alt : "Inkly" },
                ],
                projectInformation : [
                    "I created Inkly to test and improve my React skills, combining it with MongoDB as the database.",
                    "Many writing platforms are unintuitive or overloaded, making it hard to share and discover stories in a simple way.",
                    "I developed the entire project myself, both the frontend interface and the server.",
                    "The result was a fully functional platform that helped me consolidate my knowledge of React and NoSQL databases, applicable to real-world projects."
                ]
            },
            {
                projectTitle : "A Tapa Celeste",
                projectDate : "2025-07-31",
                projectDesc : "Supporters club website with events, photos, and merchandising.",
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
                ],
                projectInformation : [
                    "More than 100 daily visits. Full management of events, activities, merchandising and online membership payments.",
                    "The fan club had no online presence, limiting its growth and forcing manual management of events and membership fees.",
                    "I developed the entire application, from the visual interface to the payment gateway integration, using the team's colors as a design guide.",
                    "Great reception from members and presidents: membership growth, elimination of manual management and increased product sales."
                ]
            },
            {
                projectTitle : "QR Vicus",
                projectDate : "2025-01-09",
                projectDesc : "Mobile QR app to manage gym access quickly.",
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
                ],
                projectInformation : [
                    "Over 500 downloads across multiple gyms. Full management of client check-ins, check-outs and membership bonuses.",
                    "Gyms were losing money using magnetic wristbands and physical Tags. An expensive system that made bonus tracking a hassle.",
                    "I developed the complete visual interface, prioritizing a simple and intuitive experience for the end user.",
                    "Over 500 downloads and great client satisfaction, who completely eliminated the cost of physical wristbands."
                ]
            },
            {
                projectTitle : "My Reserve",
                projectDate : "2024-12-21",
                projectDesc : "Simple digital system to manage hair salon bookings.",
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
                ],
                projectInformation : [
                    "Project selected among the 4 best out of more than 120 students. Final grade: 9/10",
                    "Many local hairdressers manage their bookings traditionally, an inefficient method prone to errors.",
                    "I developed the complete visual interface and the server.",
                    "A 9/10 on the final project and recognition among the best projects of the class."
                ]
            },
        ],
        projectTech : "Technologies",
        projectInfoResult : ["Impact", "The Problem", "My Contribution", "Result"],
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
                urlCert: "https://www.udemy.com/certificate/UC-81996c9b-211e-4911-a5e7-cb221668f8bf/",
                siteName: "Udemy",
                date: "Nov 2025 - May 2026",
                title: "Astro",
                description: "The Framework for Content-Oriented Websites",
                conocimientos: "Knowledge",
                conocimientosList: [
                    { title: "Basic Foundations", tech: "Dynamic Routes, Static Generation, Astro Themes, RSS Feed" },
                    { title: "Server", tech: "SSR, AstroDB, Server Actions, Astro Islands" },
                    { title: "Databases", tech: "Turso, Prisma, PostgreSQL" },
                ],
                seeMore: "See more",
                seeLess: "See less"
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
    recomendation : {
        title : "Recomendations",
        recomendationList : [
            {
                img : '/img/recomendation/jose-ramon.webp',
                name : 'Jose Ramón Ríos Sieiro',
                profession : 'Vocational Training Director at Montecastelo',
                network : {
                    github : 'https://github.com/realramonrs',
                    linkedIn : 'https://www.linkedin.com/in/jose-ram%C3%B3n-r%C3%ADos-sieiro-24a80153/',
                },
                text : 'Former student at Montecastelo Vocational Training, he stood out for his work ethic, maturity, responsibility and good character. A person you can rely on.',
                more : '',
                less : ''
            },
            {
               img : '/img/recomendation/alberto-perez.webp',
               name : 'Alberto Pérez Penedo',
               profession : 'CEO & HR Consultant/Headhunter',
               network : {
                linkedIn : 'https://www.linkedin.com/in/albertoperezpenedo/'
               },
               text : 'I had the opportunity to work with Adrián on the development of Brétema HRs online training landing page, and the experience was extremely positive. From the very beginning, he demonstrated great responsiveness, efficiency, and attention to detail, quickly understanding our needs and turning them into a clear, functional, and well-crafted solution. What stood out the most was his ability to explain technical concepts in a simple and understandable way, which is incredibly valuable for those of us without a technical background. He makes complex things easy to understand, suggests practical solutions, and pays close attention to every detail to ensure the final result perfectly matches the projects needs. A highly skilled, approachable, and solution-oriented professional. I would definitely recommend him!',
               more : 'Read more',
               less : 'Read less'
            }
        ]
    },
    about : {
        title : "About me",
        desc : [
            "My name is Adrián Iglesias, although my devs call me <span class=\"text-[#DADADA]\">Igle</span>. I started programming in Visual Basic, and since then I haven't stopped.",
            "Today I have <span class=\"text-[#DADADA]\">2 years developing</span> web and mobile applications for companies <span class=\"text-[#DADADA]\">(B2B)</span>, specialized in  <span class=\"text-[#DADADA]\">automation and Artificial Intelligence.</span>",
            "When I'm not programming, I'm probably with my cat Zelda."
        ]
    }
};

export default en;