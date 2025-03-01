"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import Link from "next/link";
import { Button } from "./ui/button";
import { TECH_STACK, LINKS } from "@/config";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Tecnologies() {
  const t = useTranslations("tecnologies");
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      className="flex flex-col gap-4"
    >
      <h2 id="tecnologias" className="scroll-mt-20 text-4xl font-bold">
        {t("title")}
      </h2>
      <div className="flex flex-col gap-4">
        {Object.entries(TECH_STACK).map(([category, tools]) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle>{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <li key={tool.title}>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <div>
                          <Image
                            src={tool.image}
                            alt={tool.title}
                            width={40}
                            height={40}
                            className={
                              [
                                "/svgs/nextjs.svg",
                                "/svgs/express.svg",
                                "/svgs/sqlserver.svg",
                                "/svgs/github.svg",
                              ].includes(tool.image)
                                ? "invert-light"
                                : ""
                            }
                          />
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent side="top">
                        {tool.title}
                      </HoverCardContent>
                    </HoverCard>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Link className="flex items-start" target="_blank" href={LINKS.drive}>
        <Button>{t("download")}</Button>
      </Link>
    </motion.section>
  );
}
