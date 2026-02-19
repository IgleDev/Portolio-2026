export default {
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
                projectIcon : "proicons:globe"
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
                projectIcon : "proicons:globe"
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
                projectIcon : "proicons:github"
            }
        ]
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
        ]
    }
};