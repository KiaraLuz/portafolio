"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LINKS } from "@/config";
import { useTranslations } from "next-intl";

export default function Introduction() {
  const t = useTranslations("introduction");
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex max-h-screen flex-col items-center justify-between pt-10 sm:flex-row"
    >
      <div className="mb-8 flex flex-col justify-center gap-4 p-0 sm:m-0 sm:py-8 sm:pr-8">
        <div>
          <span className="rounded-full bg-accent/50 px-3 py-2 text-sm font-light text-foreground">
            {t("available")}
          </span>
        </div>
        <h1 className="text-4xl font-bold sm:text-5xl">{t("hola")}</h1>
        <p className="max-w-lg text-base sm:text-lg lg:text-xl">
          {t("soy")}
          <strong className="text-accent"> {t("frontend")}</strong>{" "}
          {t("interes")}
        </p>
        <div className="flex gap-4">
          <Link href="mailto:fernandezperezkiara@gmail.com" target="_blank">
            <Button>{t("email")}</Button>
          </Link>
          <Link href={LINKS.linkedin} target="_blank">
            <Button>Linkedin</Button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center"></div>
    </motion.div>
  );
}
