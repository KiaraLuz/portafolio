import Image from "next/image";
import { Badge } from "./ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { PROJECTS } from "@/config";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="pb-10 md:pb-20">
      <h2 className="mb-8 text-4xl font-bold">Proyectos</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <Card className="group h-full" key={project.title}>
            <div className="p-4">
              <Link href={project.href}>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    alt="Image"
                    className="transition-all group-hover:scale-105"
                    width={1280}
                    height={832}
                    quality={100}
                    src={project.image}
                  />
                </div>
              </Link>
            </div>
            <CardHeader className="pb-3 pt-0">
              <CardTitle>
                <div className="flex items-center gap-2">
                  <Link href={project.href} target="_blank">
                    {project.title}
                  </Link>
                  {project.github && (
                    <Link href={project.github} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                      >
                        <path
                          fill="currentColor"
                          d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                        ></path>
                      </svg>
                    </Link>
                  )}
                </div>
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-wrap *:mb-2 *:mr-2">
              {project.tags.map((tag) => (
                <Badge variant="secondary" key={tag}>
                  {tag}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}