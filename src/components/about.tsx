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
                {t("text1")}{" "}
                <span className="text-secondary-foreground">{t("text2")}</span>{" "}
                {t("text3")}{" "}
                <span className="text-secondary-foreground">{t("text4")}</span>{" "}
                {t("text5")}{" "}
                <span className="text-secondary-foreground">{t("text6")}</span>
              </p>
              <p className="text-base leading-relaxed">{t("text7")}</p>
              <p className="text-base leading-relaxed">{t("text8")}</p>
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-wrap gap-2 p-0">
            {t.raw("badges").map((badge: string, index: number) => (
              <Badge key={index} variant="secondary">
                {badge}
              </Badge>
            ))}
          </CardFooter>
        </div>
      </Card>
    </motion.section>
  );
}
