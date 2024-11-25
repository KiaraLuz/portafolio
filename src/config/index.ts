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
        href: "/contacto"
    }
]

export const PROJECTS: Project[] = [
    {
        title: "HKanime",
        description:
            "HKanime es una aplicación tipo streaming de animes donde podrás ver tus animes favoritos y hablar con otoros usuarios.",
        href: "https://hkanimes.vercel.app",
        github: "https://github.com/JCruzMi/hkanime",
        image: "/project-hk.jpg",
        tags: ["Vue.js", "Tailwind CSS"],
        featured: true
    }, 
    {
        title: "Uwallet",
        description:
            "Uwallet es una aplicación para el manejo de tus finanzas personales, centralizando tarjetas de crédito y debito. Así como realizar transferencias, retiros y pagos.",
        href: "https://uwallet.vercel.app",
        github: "https://github.com/JCruzMi/uwallet",
        image: "/project-uwallet.jpg",
        tags: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn/ui"],
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


export const TECH_STACK = [
    {
        title: "Next.js",
        href: "https://nextjs.org"
    },
    {
        title: "React",
        href: "https://reactjs.org"
    },
    {
        title: "Git",
        href: "https://git-scm.com"
    },
    {
        title: "Figma",
        href: "https://figma.com"
    },
    {
        title: "MySQL",
        href: "https://www.mysql.com"
    },
    {
        title: "TypeScript",
        href: "https://www.typescriptlang.org"
    },
    {
        title: "Docker",
        href: "https://www.docker.com"
    },
    {
        title: "Tailwind CSS",
        href: "https://tailwindcss.com"
    },
    {
        title: "Framer Motion",
        href: "https://www.framer.com/motion"
    },
    {
        title: "MongoDB",
        href: "https://www.mongodb.com"
    },
    {
        title: "Wordpress",
        href: "https://wordpress.org"
    },
    {
        title: "Convex",
        href: "https://convex.dev"
    },
    {
        title: "shadcn/ui",
        href: "https://ui.shadcn.com"
    }
]