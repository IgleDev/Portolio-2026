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
            "+2 anos de experiencia.",
            "de Galiza, España. Especializado no desenvolvemento de aplicacions web únicas."
        ],
        nav : [
            { title : "Experiencia" , id : "experiencia" },
            { title : "Proxectos" , id : "proyectos" },
            { title : "Educación" , id : "educacion" },
            { title : "Sobre min" , id : "sobre-mi" },
            { title : "Blog", id : "/blog", external : true }
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
                data : "Xan 2026 - Abr 2026",
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
                ],
                projectInformation : [
                    "Máis de 500 descargas en múltiples ximnasios. Xestión completa de entradas, saídas e bonos de clientes.",
                    "Os ximnasios perdían diñeiro con pulseiras magnéticas e Tags físicos. Un sistema caro e difícil de xestionar.",
                    "Desenvolvín a interface visual completa, priorizando unha experiencia sinxela e intuitiva para o usuario final.",
                    "Máis de 500 descargas e gran aceptación por parte do cliente, que eliminou por completo o custo das pulseiras."
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
                ],
                projectInformation : [
                    "Máis de 100 visitas diarias. Xestión completa de eventos, actividades, merchandising e pago de cota online.",
                    "A peña non tiña presenza online, o que limitaba o seu crecemento e obrigaba a xestionar eventos e cotas manualmente.",
                    "Desenvolvín toda a aplicación, dende a interface visual ata a integración da pasarela de pago, cos cores do equipo como guía de deseño.",
                    "Gran aceptación por parte dos peñistas e presidentes: crecemento de socios, eliminación da xestión manual e aumento de vendas de produtos."
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
                ],
                projectInformation : [
                    "Proxecto seleccionado entre os 4 mellores de máis de 120 alumnos. Nota final: 9.",
                    "Moitas peluquerías de barrio xestionan as súas reservas de forma tradicional, un método ineficiente e propenso a erros.",
                    "Desenvolvín a interface visual completa e o servidor.",
                    "Un 9 no TFG e recoñecemento entre os mellores proxectos da promoción."
                ]
            }
        ],
        projectTech : "Tecnoloxías",
        projectInfoResult : ["Impacto", "O Problema", "Miña Contribución", "Resultado"],
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
                title : "Técnico en Sistemas Microinformáticos e Redes",
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
                logo: "/img/education/udemy.webp",
                urlCert: "https://www.udemy.com/certificate/UC-81996c9b-211e-4911-a5e7-cb221668f8bf/",
                siteName: "Udemy",
                date: "Nov 2025 - Mai 2026",
                title: "Astro",
                description: "O Framework para sitios web orientados o contido",
                conocimientos: "Coñecementos",
                conocimientosList: [
                    { title: "Bases", tech: "Rutas Dinámicas, Paxinación Estática, Astro Themes, RSS Feed" },
                    { title: "Servidor", tech: "SSR, AstroDB, Server Actions, Astro Islands" },
                    { title: "Bases de datos", tech: "Turso, Prisma, PostgreSQL" },
                ],
                seeMore: "Ver más",
                seeLess: "Ver menos"
            },
            {
                logo : "/img/education/udemy.webp",
                urlCert : "https://www.udemy.com/certificate/UC-2c8360d8-4da3-464a-b427-a722302e992a/",
                siteName : "Udemy",
                date : "Feb 2025 - Xan 2026",
                title : "React e TypeScript",
                description : "A guía completa creando +10 proxectos prácticos",
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
    recomendation : {
        title : "Recomendacións",
        recomendationList : [
            {
                img : 'https://media.licdn.com/dms/image/v2/D4D03AQEL2oZVfKfAsg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732008085356?e=1784160000&v=beta&t=JFPVnQ2FpNTwILkMnz0sbcLmRWM7rUqivdbE7FJVjXA',
                name : 'Jose Ramón Ríos Sieiro',
                profession : 'Director Formación Profesional Montecastelo',
                network : {
                    github : 'https://github.com/realramonrs',
                    linkedIn : 'https://www.linkedin.com/in/jose-ram%C3%B3n-r%C3%ADos-sieiro-24a80153/',
                },
                text : 'Antigo alumno de FP Montecastelo, destacou polo seu traballo, madurez, responsabilidade e bo carácter. Unha persoa na que se pode confiar.'
            }
        ]
    },
    about : {
        title : "Sobre min",
        desc : [
            "Chámome Adrián Iglesias, aínda que meus devs chámanme <span class=\"text-[#DADADA]\">Igle</span>. Empecei programando en Visual Basic e dende entón non parei.",
            "Hoxe levo <span class=\"text-[#DADADA]\">2 anos desenvolvendo</span> aplicacións webs e móbiles para empresas <span class=\"text-[#DADADA]\">(B2B)</span>, especializado na <span class=\"text-[#DADADA]\">automatización e Intelixencia Artificial.</span>",
            "Cando non estou programando, seguramente estou coa miña gata Zelda."
        ]
    }
};

export default gal;