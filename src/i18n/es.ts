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
            "+2 años de experiencia.",
            "de Galicia, España. Especializado en el desarrollo de aplicaciones web únicas."
        ],
        studie : "Técnico Superior",
        nav : [
            { title : "Experiencia" , id : "experiencia" },
            { title : "Proyectos" , id : "proyectos" },
            { title : "Educación" , id : "educacion" },
            { title : "Sobre mi" , id : "sobre-mi" },
            { title : "Blog", id : "blog", external : true }
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
                projectTitle : "Brétema Formación",
                projectDate : "2026-07-21",
                projectDesc: "Cursos en linea. Formación para impulsar tus competencias digitales.",
                projectDescLong : "Cursos y packs en liena especializados en Inteligencia Artificial, Big Data y Desarrollo Web. Aprende a tu ritmo, obtén tu certificado y deja que nosotros nos encarguemos de todo. Tu solo escoge lo que quieres aprender.",
                projectTech : [
                    { name : "Astro", icon : "vscode-icons:file-type-astro" },
                    { name : "Typescript", icon : "vscode-icons:file-type-typescript" },
                    { name : "Resend", icon : "resend" },
                ],
                projectGithub : "",
                projectUrl : "https://formacion.bretemahr.com/",
                projectIcon : "proicons:globe",
                projectInfo : "¡Encuentralo aquí!",
                projectImg : [
                    { src : "/img/projects/bretemaformacion.webp", alt : "Bretema Formación" },
                ],
                projectInformation: [
                    "Colaboré en el desarrollo de la plataforma de formación online de Brétema HR, participando en la creación de una experiencia moderna, intuitiva y adaptada.",
                    "El objetivo era ofrecer un espacio donde cualquier persona pudiera acceder fácilmente a formación especializada, simplificando el proceso y acceso a los contenidos.",
                    "Contribuí al desarrollo del frontend, integración de funcionalidades y optimización del UX/UI, trabajando con el cliente para adaptar la plataforma a sus necesidades.",
                    "El resultado fue una plataforma que permite gestionar la oferta formativa de Brétema HR y ofrecer una experiencia profesional a los estudiantes."
                ]
            },
            {
                projectTitle : "Inkly",
                projectDate : "2026-07-01",
                projectDesc : "Plataforma digital para escribir, publicar y descubrir historias.",
                projectDescLong : "Proyecto diseñado como red social de escritura, donde los usuarios pueden crear, compartir y explorar historias de otros autores en un espacio sencillo e intuitivo.",
                projectTech : [
                    { name : "React", icon : "vscode-icons:file-type-reactjs" },
                    { name : "Node.js", icon : "vscode-icons:file-type-node" },
                    { name : "Express", icon : "express" },
                    { name : "MongoDB", icon : "vscode-icons:file-type-mongo"}
                ],
                projectGithub : "https://github.com/IgleDev/Inkly",
                projectUrl : "https://inkly-dev.vercel.app/",
                projectIcon : "proicons:github",
                projectInfo : "¡Encuentralo aquí!",
                projectImg : [
                    { src : "/img/projects/inkly.webp", alt : "Inkly" },
                ],
                projectInformation : [
                    "Quise crear Inkly para poner a prueba y mejorar mi nivel en React, combinándolo con MongoDB como base de datos.",
                    "Muchas plataformas de escritura resultan poco intuitivas o sobrecargadas, dificultando compartir y descubrir historias de forma sencilla.",
                    "Desarrollé el proyecto por completo, tanto la interfaz visual (cliente) como el servidor.",
                    "El resultado fue una plataforma funcional que me permitió consolidar conocimientos en React y bases de datos NoSQL, aplicables a proyectos reales."
                ]
            },
            {
                projectTitle : "A Tapa Celeste",
                projectDate : "2025-07-31",
                projectDesc : "Web de la peña celtista con eventos, fotos y merchandising.",
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
                ],
                projectInformation : [
                    "Más de 100 visitas diarias. Gestión completa de eventos, actividades, merchandising y pago de cuota online.",
                    "La peña no tenía presencia online, algo que limitaba su crecimiento y obligaba a gestionar eventos y cuotas manualmente.",
                    "Desarrollé toda la aplicación, desde la interfaz visual hasta la integración de la pasarela de pago, con los colores del equipo como guía de diseño.",
                    "Gran aceptación por peñistas y presidentes: crecimiento de socios, eliminación de la gestión manual y aumento de ventas de productos."
                ]
            },
            {
                projectTitle : "QR Vicus",
                projectDate : "2025-01-09",
                projectDesc : "App móvil con QR para controlar accesos en gimnasios.",
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
                ],
                projectInformation : [
                    "Más de 500 descargas en múltiples gimnasios. Gestión completa de entradas, salidas y bonos de clientes.",
                    "Los gimnasios perdían dinero con pulseras magnéticas y Tags físicos. Un sistema caro y difícil de gestionar.",
                    "Desarrollé la interfaz visual completa, priorizando una experiencia sencilla e intuitiva para el usuario final.",
                    "Más de 500 descargas y gran aceptación por parte del cliente, que eliminó por completo el coste de las pulseras."
                ]
            },
            {
                projectTitle : "My Reserve",
                projectDate : "2024-12-21",
                projectDesc : "Sistema digital sencillo para gestionar reservas en peluquerías.",
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
                ],
                projectInformation : [
                    "Proyecto seleccionado entre los 4 mejores de más de 120 alumnos. Nota final: 9.",
                    "Muchas peluquerías de barrio gestionan sus reservas de forma tradicional, un método ineficiente y propenso a errores.",
                    "Desarrollé la interfaz visual completa y el servidor.",
                    "Un 9 en el TFG y reconocimiento entre los mejores proyectos de la promoción."
                ]
            },
        ],
        projectTech : "Tecnologías",
        projectInfoResult : ["Impacto", "El Problema", "Mi Contribución", "Resultado"],
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
                title : "Técnico en Sistemas Microinformáticos y Redes",
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
                logo: "/img/education/udemy.webp",
                urlCert: "https://www.udemy.com/certificate/UC-81996c9b-211e-4911-a5e7-cb221668f8bf/",
                siteName: "Udemy",
                date: "Nov 2025 - May 2026",
                title: "Astro",
                description: "El Framework para sitios web orientados al contenido",
                conocimientos: "Conocimientos",
                conocimientosList: [
                    { title: "Bases", tech: "Rutas Dinámicas, Paginación Estática, Astro Themes, RSS Feed" },
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
    recomendation : {
        title : "Recomendaciones",
        recomendationList : [
            {
                img : '/img/recomendation/jose-ramon.webp',
                name : 'Jose Ramón Ríos Sieiro',
                profession : 'Director Formación Profesional Montecastelo',
                network : {
                    github : 'https://github.com/realramonrs',
                    linkedIn : 'https://www.linkedin.com/in/jose-ram%C3%B3n-r%C3%ADos-sieiro-24a80153/',
                },
                text : 'Antiguo alumno de FP Montecastelo, destacó por su trabajo, madurez, responsabilidad y buen carácter. Persona en la que se puede confiar.',
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
               text : 'He tenido la oportunidad de trabajar con Adrián en el desarrollo de la landing page de formación online de Brétema HR y la experiencia ha sido muy positiva. Desde el primer momento mostró una gran atención, rapidez y eficiencia, entendiendo lo que necesitábamos y llevándolo a una solución clara, funcional y cuidada. Destacaría especialmente su capacidad para explicar la parte técnica de forma sencilla, algo muy valioso cuando quienes estamos al otro lado no tenemos un perfil técnico. Hace fácil lo complejo, propone soluciones y cuida los detalles para que el resultado final encaje con lo que el proyecto necesita. Un profesional resolutivo, cercano y muy recomendable!!',
               more : 'Leer más',
               less : 'Leer menos'
            }
        ],
    },
    about : {
        title : "Sobre mí",
        desc : [
            "Me llamo Adrián Iglesias, aunque mis devs me llaman <span class=\"text-[#DADADA]\">Igle</span>. Empecé programando en Visual Basic y desde entonces no he parado.",
            "Hoy llevo <span class=\"text-[#DADADA]\">2 años desarrollando</span> aplicaciones web y móviles para empresas <span class=\"text-[#DADADA]\">(B2B)</span>, especializado en <span class=\"text-[#DADADA]\">automatización e Inteligencia Artificial.</span>",
            "Cuando no estoy programando, seguramente estoy con mi gata Zelda."
        ]
    }
};

export default es;