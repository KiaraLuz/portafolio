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
        href: "/proyectos"
    },
    {
        title: "Sobre mí",
        href: "/sobre-mi"
    }
]

export const PROJECTS: Project[] = [
    {
        title: "Place of amazing portfolios",
        description:
            "Are you looking for inspiration for your portfolio? You're in the right place! Here you will find a collection of amazing portfolios by amazing people.",
        href: "https://list.swajp.me",
        github: "https://github.com/swajp/list-swajp.me",
        image: "/projects/list-project.png",
        tags: ["Next.js", "Tailwind CSS"],
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