export default {
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
                data : "Ene 2026 - Actualidad",
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
                projectIcon : "proicons:globe"
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
                projectIcon : "proicons:globe"
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
                projectIcon : "proicons:github"
            }
        ]
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
        ]
    }
};