import type { Translations } from '../types/index';

const es : Translations = {
    languageLabel: "Idioma",
    languageOptions: {
        es: "Español",
        en: "Inglés",
        gal : "Gallego"
    },
    home: {
        title: "Hola! Soy ADRIAN IGLESIAS",
        subtitle: "Desarrollador Full-Stack",
        desc : [
            "+3 años de experiencia.",
            "de Galicia, España. Especializado en el desarrollo de aplicaciones web únicas."
        ],
        studie : "Técnico Superior",
        nav : [
            { title : "Experiencia" , id : "experiencia" },
            { title : "Proyectos" , id : "proyectos" },
            { title : "Educación" , id : "educacion" },
            { title : "Sobre mi" , id : "sobre-mi" }
        ],
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
                imgClass : "w-24 h-24 bg-[#DCF1DD] rounded-2xl flex items-center justify-center p-2",
                title : "Desarrollador Full-Stack",
                data : "Ene 2026 - Abr 2026",
                companyName : "Vexiza S.L",
                description : "Responsable técnico del desarrollo de aplicaciones web de alta criticidad y alcance institucional, enfocadas en la gestión de servicios públicos y administración de recursos a gran escala. Responsable de arquitecturas robustas que garantizan la seguridad y la accesibilidad.",
                jobInfo : {
                    url : "https://vexiza.com",
                    text : "Saber más"
                }
            },
            {
                img : "/img/work/adealoxica.webp",
                imgClass : "w-24 h-24 bg-[#DCE3F1] rounded-2xl flex items-center justify-center p-2",
                title : "Desarrollador Web & Multiplataforma",
                data : "Oct 2024 - Ene 2026",
                companyName : "Adealoxica Ingeniería S.L",
                description : "Responsable de la estructura técnica para el desarrollo de aplicaciones web y móviles, abarcando Front-End, Back-End y bases de datos. He creado soluciones utilizadas a nivel nacional, incluyendo una aplicación móvil implementada en tiempo reducido y un sistema de facturación automatizado que mejoró la eficiencia y entrega de software.",
                jobInfo : {
                    url : "https://adealoxicaingenieria.com",
                    text : "Saber más"
                }
            }
        ]
    },
    projects : {
        title : "Proyectos",
        projectList : [
            {
                projectTitle : "QR Vicus",
                projectDesc : "📲​ App móvil con QR para controlar accesos en gimnasios.",
                projectDescLong : "Aplicación móvil para la gestión de entrada y salida de personas en múltiples gimnasios de Vigo y alrededores, utilizando códigos QR para un proceso rápido y eficiente.",
                projectTech : [
                    { name : "NativeScript", icon : "nativescript" },
                    { name : "Angular", icon : "vscode-icons:file-type-angular" },
                    { name : "TypeScript", icon : "vscode-icons:file-type-typescript" },
                ],
                projectGithub : "",
                projectUrl : "https://play.google.com/store/apps/details?id=com.adealoxica.qrviscus&hl=es_419",
                projectIcon : "proicons:globe",
                projectInfo : "¡Encuentralo aquí!",
                projectImg : [
                    { src : "/img/projects/qrvicusLog.webp", alt : "QR Vicus" },
                ]
            },
            {
                projectTitle : "A Tapa Celeste",
                projectDesc : "🖥️​ Web de la peña celtista con eventos, fotos y merchandising.",
                projectDescLong : "Web dedicada a la peña de aficionados del Celta \"A Tapa Celeste\", que ofrece información sobre la peña, eventos, actividades, contactos, merchandising, imágenes de nuestros peñistas y demás.",
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
                projectDesc : "✂️ Sistema digital sencillo para gestionar reservas en peluquerías.",
                projectDescLong : "Proyecto diseñado para la gestión de reservas en peluquerías, reemplazando el método tradicional por un sistema digitalizado, sencillo e intuitivo.",
                projectTech : [
                    { name : ".NET", icon : "net" },
                    { name : "C#", icon : "vscode-icons:file-type-csharp" },
                    { name : "JavaScript", icon : "vscode-icons:file-type-light-js" },
                    { name : "SQL Server", icon : "vscode-icons:file-type-mysql"}
                ],
                projectGithub : "https://github.com/IgleDev/MyReserve",
                projectUrl : "",
                projectIcon : "proicons:github",
                projectInfo : "¡Encuentralo aquí!",
                projectImg : [
                    { src : "/img/projects/myreserve.webp", alt : "My Reserve" },
                ]
            }
        ],
        projectTech : "Tecnologías",
    },
    education : {
        title : "Educación y Certificaciones",
        educationList : [
            {
                logo : "/img/education/fpfomento.webp",
                siteName : "F.P Montecastelo",
                date : "Sep 2022 - Dic 2024",
                title : "Técnico Superior de Desarrollo de Aplicaciones Web",
                description : "Ciclo superior enfocado al desarrollo de aplicaciones web",
                conocimientos : "Conocimientos",
                conocimientosList : [
                    { title : "Desarrollo Web & Servidor", tech : "JavaScript, React, .NET" },
                    { title : "Bases de datos", tech : "SQL Server"},
                    { title : "Entornos de desarrollo", tech : "Git, GitHub, Docker"}
                ]
            },
            {
                logo : "/img/education/fpfomento.webp",
                siteName : "F.P Montecastelo",
                date : "Sep 2020 - Jun 2022",
                title : "Técnico Medio en Sistemas Microinformáticos y Redes",
                description : "Ciclo medio enfocado en las bases del conocimiento de redes y sistemas",
                conocimientos : "Conocimientos",
                conocimientosList : [
                    { title : "Programación", tech : "Visual Basic, HTML, CSS, JavaScript"},
                    { title : "Redes", tech : "Cisco, Protocolos de red" },
                    { title : "Sistemas Operativos", tech : "En Red, Linux" },
                    { title : "Montaje de Equipos", tech : "Hardware, Arduino" }
                ],
                seeMore : "Ver más",
                seeLess : "Ver menos"
            },
            {
                logo : "/img/education/udemy.webp",
                urlCert : "https://www.udemy.com/certificate/UC-2c8360d8-4da3-464a-b427-a722302e992a/",
                siteName : "Udemy",
                date : "Feb 2025 - Ene 2026",
                title : "React y TypeScript",
                description : "La guía completa creando +10 proyectos prácticos",
                conocimientos : "Conocimientos",
                conocimientosList : [
                    { title : "Context", tech : "Context API" },
                    { title : "API", tech : "Zustand, Zod, MongoDB" },
                    { title : "Router", tech : "React Router DOM" },
                    { title : "Hooks", tech : "useReducer, useContext, useState"},
                ],
                seeMore : "Ver más",
                seeLess : "Ver menos"
            },
            {
                logo : "/img/education/udemy.webp",
                urlCert : "https://www.udemy.com/certificate/UC-e3213d1f-6e4a-41d2-afe9-7bdbb8bd68d6/",
                siteName : "Udemy",
                date : "Sept 2023 - Feb 2025",
                title : "Domina TailwindCSS",
                description : "De cero a experto en TailwindCSS con proyectos reales",
                conocimientos : "Conocimientos",
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
                title : "Bootstrap 5: Curso completo desde 0",
                description : "El curso completo de Bootstrap 5 práctico y desde cero",
                conocimientos : "Conocimientos",
                conocimientosList : [
                    { title : "Posicionamiento", tech : "Flex, Grid, Position" },
                    { title : "Componentes", tech : "Componentes, Formularios" },
                    { title : "Utilidades", tech : "Clases de utilidad" },
                ],
            },
            {
                logo : "/img/education/udemy.webp",
                urlCert : "https://www.udemy.com/certificate/UC-2c17eb03-ea02-4f3d-af40-96e171d38e59/",
                siteName : "Udemy",
                date : "Sept 2023 - Oct 2023",
                title : "TypeScript sin fronteras",
                description : "Guía definitiva de TypeScript desde cero",
                conocimientos : "Conocimientos",
                conocimientosList : [
                    { title : "Tipado", tech : "Básico, Avanzado" },
                    { title : "Programación Orientada a Objetos", tech : "Clases, Interfaces, Herencia, Decoradores" },
                    { title : "Integraciones", tech : "Node, React" },
                ],
            },
        ]
    },
    about : {
        title : "Sobre mí",
        desc : [
            "Me llamo Adrián Iglesias, aunque mis devs me llaman <span class=\"text-[#DADADA]\">Igle</span>. Empecé programando en Visual Basic y desde entonces no he parado.",
            "Hoy llevo <span class=\"text-[#DADADA]\">3 años desarrollando</span> aplicaciones web y móviles para el <span class=\"text-[#DADADA]\">sector Fintech</span>",
            "Cuando no estoy programando, seguramente estoy con mi gata Zelda."
        ]
    }
};

export default es;