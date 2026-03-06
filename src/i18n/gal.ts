import type { Translations } from '../types/index';

const gal : Translations = {
    languageLabel: "Linguaxe",
    languageOptions: {
        es: "Castelan",
        en: "Inglés",
        gal : "Galego"
    },
    home: {
        title: "Ola! Eu son ADRIAN IGLESIAS",
        subtitle: "Desenvolvedor Full-Stack",
        desc : [
            "+3 anos de experiencia.",
            "de Galiza, España. Especializado no desenvolvemento de aplicacions web únicas."
        ],
        nav : [
            { title : "Experiencia" , id : "experiencia" },
            { title : "Proxectos" , id : "proyectos" },
            { title : "Educación" , id : "educacion" },
            { title : "Sobre min" , id : "sobre-mi" }
        ],
        studie : "Técnico Superior",
        contactButtons : {
            contact : "Contactame",
            cv : "Descargar CV",
            LinkedIn : "LinkedIn",
            Github : "Github"
        }
    },
    experience: {
        title: "Experiencia Laboral",
        jobs : [
            {
                img : "/img/work/vexiza.webp",
                imgClass : "w-24 h-24 bg-[#DCF1DD] rounded-2xl p-2",
                title : "Desenvolvedor Full-Stack",
                data : "Xan 2026 - Actualidade",
                companyName : "Vexiza S.L",
                description : "Responsable técnico do desenvolvemento de aplicacións web de alta criticidade e alcance institucional, enfocadas na xestión de servizos públicos e na administración de recursos a gran escala. Responsable de arquitecturas robustas que garanten a seguridade e a accesibilidade.",
                jobInfo : {
                    url : "https://vexiza.com",
                    text : "Saber mais"
                }
            },
            {
                img : "/img/work/adealoxica.webp",
                imgClass : "w-24 h-24 bg-[#DCE3F1] rounded-2xl flex items-center justify-center p-2",
                title : "Desenvolvedor Web e Multiplataforma",
                data : "Out 2024 - Xan 2026",
                companyName : "Adealoxica Ingeniería S.L",
                description : "Responsable da estrutura técnica para o desenvolvemento de aplicacións web e móbiles, abranguiendo Front-End, Back-End e bases de datos. Creei solucións empregadas a nivel nacional, incluíndo unha aplicación móbil implementada nun tempo reducido e un sistema de facturación automatizado que mellorou a eficiencia e a entrega de software.",
                jobInfo : {
                    url : "https://adealoxicaingenieria.com",
                    text : "Saber mais"
                }
            }
        ]
    },
    projects : {
        title : "Proxectos",
        projectList : [
            {
                projectTitle : "QR Vicus",
                projectDesc : "📲 App móbil con QR para controlar accesos en ximnasios.",
                projectDescLong : "Aplicación mobil para a xestión da entrada e saída de persoas en múltiples ximnasios de Vigo e cercanias, empregando códigos QR para un proceso rápido e eficiente.",
                projectTech : [
                    { name : "NativeScript", icon : "nativescript" },
                    { name : "Angular", icon : "vscode-icons:file-type-angular" },
                    { name : "TypeScript", icon : "vscode-icons:file-type-typescript" },
                ],
                projectGithub : "",
                projectUrl : "https://play.google.com/store/apps/details?id=com.adealoxica.qrviscus&hl=es_419",
                projectIcon : "proicons:globe",
                projectInfo : "¡Visitalo aquí!",
                projectImg : [
                    { src : "/img/projects/qrvicusLog.webp", alt : "QR Vicus" },
                ]
            },
            {
                projectTitle : "A Tapa Celeste",
                projectDesc : "🖥️ Web da peña celtista con eventos, fotos e merchandising.",
                projectDescLong : "Web adicada a peña dos siareiros do Celta \"A Tapa Celeste\" que ofrece información sobre a peña, eventos, actividades, contactos, merchandising, imaxes dos nosos peñistas e demáis.",
                projectTech : [
                    { name : "React", icon : "vscode-icons:file-type-reactjs" },
                    { name : "Node.js", icon : "vscode-icons:file-type-node" },
                    { name : "Express", icon : "express" },
                    { name : "Stripe", icon : "stripe" }
                ],
                projectGithub : "",
                projectUrl : "https://atapaceleste.gal",
                projectIcon : "proicons:globe",
                projectInfo : "¡Visitalo aquí!",
                projectImg : [
                    { src : "/img/projects/atapaceleste.webp", alt : "A Tapa Celeste" },
                ]
            },
            {
                projectTitle : "My Reserve",
                projectDesc : "✂️ Sistema dixital sinxelo para xestionar reservas en peluquerías.",
                projectDescLong : "Proxecto deseñado para a xestión de reservas en peluquerías, reemprazando o método tradicional por un sistema dixitalizado, sencillo e intuitivo.",
                projectTech : [
                    { name : ".NET", icon : "net" },
                    { name : "C#", icon : "vscode-icons:file-type-csharp" },
                    { name : "JavaScript", icon : "vscode-icons:file-type-light-js" },
                    { name : "SQL Server", icon : "vscode-icons:file-type-mysql"}
                ],
                projectGithub : "https://github.com/IgleDev/MyReserve",
                projectUrl : "",
                projectIcon : "proicons:github",
                projectInfo : "¡Visitalo aquí!",
                projectImg : [
                    { src : "/img/projects/myreserve.webp", alt : "My Reserve" },
                ]
            }
        ],
        projectTech : "Tecnoloxías"
    },
    education : {
        title : "Educación e Certificacións",
        educationList : [
            {
                logo : "/img/education/fpfomento.webp",
                siteName : "F.P Montecastelo",
                date : "Set 2022 - Dec 2024",
                title : "Técnico Superior de Desenvolvemento de Aplicacions Web",
                description : "Ciclo superior enfocado no desenvolvemento de aplicacions web",
                conocimientos : "Coñecementos",
                conocimientosList : [
                    { title : "Desenvolvemento Web e Servidor", tech : "JavaScript, React, .NET" },
                    { title : "Bases de datos", tech : "SQL Server"},
                    { title : "Entornos de desenvolvemento", tech : "Git, GitHub, Docker"}
                ]
            },
            {
                logo : "/img/education/fpfomento.webp",
                siteName : "F.P Montecastelo",
                date : "Sep 2020 - Jun 2022",
                title : "Técnico Medio en Sistemas Microinformáticos e Redes",
                description : "Ciclo medio enfocado nas bases do coñecemento de redes e sistemas",
                conocimientos : "Coñecementos",
                conocimientosList : [
                    { title : "Programación", tech : "Visual Basic, HTML, CSS, JavaScript"},
                    { title : "Redes", tech : "Cisco, Protocolos de red" },
                    { title : "Sistemas Operativos", tech : "En Red, Linux" },
                    { title : "Montaxe de Equipos", tech : "Hardware, Arduino" },
                ],
                seeMore : "Ver máis",
                seeLess : "Ver menos"
            },
            {
                logo : "/img/education/udemy.webp",
                urlCert : "https://www.udemy.com/certificate/UC-2c8360d8-4da3-464a-b427-a722302e992a/",
                siteName : "Udemy",
                date : "Feb 2025 - Xan 2026",
                title : "React e TypeScript",
                description : "A gúia completa creando +10 proxectos prácticos",
                conocimientos : "Coñecementos",
                conocimientosList : [
                    { title : "Context", tech : "Context API" },
                    { title : "API", tech : "Zustand, Zod, MongoDB" },
                    { title : "Router", tech : "React Router DOM" },
                    { title : "Hooks", tech : "useReducer, useContext, useState"},
                ],
                seeMore : "Ver máis",
                seeLess : "Ver menos"
            },
            {
                logo : "/img/education/udemy.webp",
                urlCert : "https://www.udemy.com/certificate/UC-e3213d1f-6e4a-41d2-afe9-7bdbb8bd68d6/",
                siteName : "Udemy",
                date : "Sept 2023 - Feb 2025",
                title : "Domina TailwindCSS",
                description : "De cero a experto en TailwindCSS con proxectos reais",
                conocimientos : "Coñecementos",
                conocimientosList : [
                    { title : "TailwindCSS v4", tech : "TailwindCSS" },
                    { title : "TailwindCSS v3", tech : "TailwindCSS" },
                    { title : "Bases Básicas", tech : "CSS" },
                ],
            },
            {
                logo : "/img/education/udemy.webp",
                urlCert : "https://www.udemy.com/certificate/UC-3d23da76-0544-47da-b6a5-e8a10ba6c4a6/",
                siteName : "Udemy",
                date : "Sept 2023 - Oct 2023",
                title : "Bootstrap 5: Curso completo dende 0",
                description : "O curso completo de Bootstrap 5 práctico e dende cero",
                conocimientos : "Coñecementos",
                conocimientosList : [
                    { title : "Posicionamento", tech : "Flex, Grid, Position" },
                    { title : "Componentes", tech : "Componentes, Formularios" },
                    { title : "Utilidades", tech : "Clases de utilidade" },
                ],
            },
            {
                logo : "/img/education/udemy.webp",
                urlCert : "https://www.udemy.com/certificate/UC-2c17eb03-ea02-4f3d-af40-96e171d38e59/",
                siteName : "Udemy",
                date : "Sept 2023 - Oct 2023",
                title : "TypeScript sen fronteiras",
                description : "Guía definitiva de TypeScript dende cero",
                conocimientos : "Coñecementos",
                conocimientosList : [
                    { title : "Tipado", tech : "Básico, Avanzado" },
                    { title : "Programación Orientada a Obxectos", tech : "Clases, Interfaces, Herencia, Decoradores" },
                    { title : "Integracions", tech : "Node, React" },
                ],
            }
        ]
    },
    about : {
        title : "Sobre min",
        desc : [
            "Chámome Adrián Iglesias, aínda que meus devs chámanme <span class=\"text-[#DADADA]\">Igle</span>. Empecei programando en Visual Basic e dende entón non parei.",
            "Hoxe levo <span class=\"text-[#DADADA]\">3 anos desenvolvendo</span> aplicacións webs e móbiles para o <span class=\"text-[#DADADA]\">sector Fintech</span>",
            "Cando non estou programando, seguramente estou coa miña gata Zelda."
        ]
    }
};

export default gal;