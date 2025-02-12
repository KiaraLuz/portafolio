import { title } from "process"

type Project = {
    title: string
    description: string
    href: string
    github?: string
    image: string
    tags: string[]
    featured?: boolean
}

export const NAVIGATION = [
    {
        title: "Inicio",
        href: "/"
    },
    {
        title: "Proyectos",
        href: "/#proyectos"
    },
    {
        title: "Tecnologías",
        href: "/#tecnologias"
    },
    {
        title: "Sobre mí",
        href: "/#sobre-mi"
    }, 
    {
        title: "Contacto",
        href: "mailto:fernandezperezkiara@gmail.com"
    }
]

export const PROJECTS: Project[] = [
    {
        title: "HKanime",
        description:
            "HKanime es una aplicación tipo streaming de animes donde podrás ver tus animes favoritos y hablar con otoros usuarios.",
        href: "https://hkanimes.vercel.app",
        github: "https://github.com/JCruzMi/hkanime",
        image: "/project-hk.webp",
        tags: ["Vue.js", "Tailwind CSS"],
        featured: true
    }, 
    {
        title: "Uwallet",
        description:
            "Uwallet es una aplicación para el manejo de tus finanzas personales, centralizando tarjetas de crédito y debito. Así como realizar transferencias, retiros y pagos.",
        href: "https://uwallet.vercel.app",
        github: "https://github.com/JCruzMi/uwallet",
        image: "/project-uwallet.webp",
        tags: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn/ui"],
        featured: true
    },
    {
        title: "Valorant",
        description:
            "Aplicación donde se muestran los agentes de Valorant y sus habilidades. Creado con fines educativos.",
        href: "https://app.netlify.com/sites/agents-valorant/",
        github: "https://github.com/KiaraLuz/valorant",
        image: "/project-valorant.webp",
        tags: ["React.js", "Tailwind CSS", "TypeScript", "Swiper.js"],
        featured: true
    },
    {
        title: "Animaciones con CSS y Tailwind",
        description:
            "Aplicación donde se muestran distintas animaciones con código en CSS y Tailwind. Se muestra el código en un editor simple, listo para copiar.",
        href: "https://animaciones-tailwind-css.netlify.app/",
        github: "https://github.com/KiaraLuz/Animations",
        image: "/project-animaciones.webp",
        tags: ["Vue.js", "Tailwind CSS", "Simple Code Editor"],
        featured: true
    }
]

export const SOCIALS = [
    {
        title: "Github",
        href: "https://github.com/KiaraLuz",
    },
    {
        title: "Linkedin",
        href: "https://www.linkedin.com/in/kiara-luz-fernandez-perez-a182a226b/",
    }
]


export const TECH_STACK = {
    Frontend: [
      { title: "HTML5", image: "/svgs/html5.svg" },
      { title: "CSS3", image: "/svgs/css3.svg" },
      { title: "JavaScript", image: "/svgs/javascript.svg" },
      { title: "TypeScript", image: "/svgs/typescript.svg" },
      { title: "ReactJS", image: "/svgs/react.svg" },
      { title: "NextJS", image: "/svgs/nextjs.svg" },
      { title: "VueJS", image: "/svgs/vuejs.svg" },
      { title: "Bootstrap", image: "/svgs/bootstrap.svg" },
      { title: "Tailwind CSS", image: "/svgs/tailwindcss.svg" },
    ],
    Backend: [
      { title: "Node.js", image: "/svgs/nodejs.svg" },
      { title: "Express", image: "/svgs/express.svg" },
      { title: "MongoDB", image: "/svgs/mongodb.svg" },
      { title: "MySQL", image: "/svgs/mysql.svg" },
      { title: "SQLserver", image: "/svgs/sqlserver.svg" },
      { title: "Python", image: "/svgs/python.svg" },
    ],
    Otros: [
      { title: "Git", image: "/svgs/git.svg" },
      { title: "GitHub", image: "/svgs/github.svg" },
      { title: "Figma", image: "/svgs/figma.svg" },
      { title: "WordPress", image: "/svgs/wordpress.svg" },
    ]
};
  
export const LINKS = {
    linkedin: "https://www.linkedin.com/in/kiara-luz-fernandez-perez-a182a226b/",
    github: "https://github.com/KiaraLuz",
    email: "mailto:fernandezperezkiara@gmail.com",
    drive: "https://drive.google.com/file/d/1ajmdUCi1fP-BMjImAAWOdGSGJWN94ggP/view?usp=sharing"
}