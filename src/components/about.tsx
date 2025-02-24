"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      className="flex flex-col gap-4"
    >
      <h2 id="sobre-mi" className="scroll-mt-20 text-4xl font-bold">
        Sobre Mí
      </h2>
      <p className="text-base">
        Me llamo Kiara, soy desarrolladora frontend con interés en adquirir
        experiencia laboral y seguir aprendiendo para aportar valor a proyectos
        digitales.
      </p>
      <p>
        Estudio en la Universidad Nacional Federico Villarreal, cursando
        actualmente el 8vo ciclo de la carrera de Ingeniería de Sistemas
      </p>
    </motion.section>
  );
}
