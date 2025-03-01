"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      className="flex flex-col gap-4"
    >
      <h2 id="sobre-mi" className="scroll-mt-20 text-4xl font-bold">
        {t("title")}
      </h2>
      <Card className="flex flex-col gap-4 p-4 md:flex-row">
        <div className="flex min-w-[300px] items-center justify-center overflow-hidden rounded-lg md:w-auto">
          <Image
            alt="Kiara"
            src="/perfil.webp"
            className="z-0 h-full w-full rounded-lg object-cover transition-all group-hover:scale-105"
            width={400}
            height={400}
          />
        </div>
        <div className="flex w-full flex-col gap-4">
          <CardHeader className="gap-2 p-0">
            <CardTitle>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  Desarrolladora Frontend
                  <Link
                    href="https://github.com/kiaraluz"
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
                </div>
              </div>
            </CardTitle>
            <CardDescription className="flex flex-col gap-2">
              <p className="text-base leading-relaxed">
                Soy Kiara, desarrolladora frontend con experiencia en la
                creación de interfaces dinámicas, optimizadas y accesibles.
                Actualmente, estudio el{" "}
                <span className="text-secondary-foreground">9no ciclo</span> de
                <span className="text-secondary-foreground">
                  {" "}
                  Ingeniería de Sistemas
                </span>{" "}
                en la
                <span className="text-secondary-foreground">
                  {" "}
                  Universidad Nacional Federico Villarreal
                </span>
                .
              </p>
              <p className="text-base leading-relaxed">
                Me especializo en el desarrollo web, asegurando que las
                aplicaciones sean eficientes y fáciles de usar. He trabajado en
                proyectos aplicando metodologías ágiles y siempre busco mejorar
                mis habilidades y asumir nuevos retos.
              </p>
              <p className="text-base leading-relaxed">
                También me interesa el diseño UX/UI y la optimización de
                rendimiento en el frontend. En mi tiempo libre, disfruto de los
                videojuegos y explorar nuevas tecnologías.
              </p>
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-wrap gap-2 p-0">
            <Badge variant="secondary">
              Estudiante de Ingeniería de Sistemas
            </Badge>
            <Badge variant="secondary">Apasionada por la tecnología</Badge>
            <Badge variant="secondary">Autodidacta</Badge>
            <Badge variant="secondary">
              En búsqueda de nuevas oportunidades
            </Badge>
            <Badge variant="secondary">Amante de los videojuegos</Badge>
          </CardFooter>
        </div>
      </Card>
    </motion.section>
  );
}
