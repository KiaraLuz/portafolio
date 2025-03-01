"use client";

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
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("projects");
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      className="flex flex-col gap-4"
    >
      <h2 id="proyectos" className="scroll-mt-20 text-4xl font-bold">
        {t("title")}
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <Card className="group h-full" key={project.title}>
            <div className="p-4">
              <Link href={project.href} target="_blank">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    alt={project.title}
                    className="z-0 transition-all group-hover:scale-105"
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
                    {t(`${project.title.toLowerCase()}.title`)}
                  </Link>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      aria-label="link-github"
                    >
                      <Image
                        alt="GitHub"
                        src="/svgs/github.svg"
                        width={24}
                        height={24}
                      />
                    </Link>
                  )}
                </div>
              </CardTitle>
              <CardDescription>
                {t(`${project.title.toLowerCase()}.description`)}
              </CardDescription>
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
    </motion.section>
  );
}
