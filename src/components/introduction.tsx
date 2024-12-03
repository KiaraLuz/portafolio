import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Introduction() {
  return (
    <div className="flex max-h-screen flex-col items-center justify-between pt-10 sm:flex-row">
      <div className="mb-8 flex flex-col justify-center gap-4 p-0 sm:m-0 sm:py-8 sm:pr-8">
        <Image
          className="rounded-full"
          src="/perfil.jpg"
          alt="Perfil de Kiara"
          width={80}
          height={80}
        />
        <h1 className="text-4xl font-bold sm:text-5xl">Hola, soy Kiara</h1>
        <p className="mt-4 max-w-lg text-base sm:text-lg lg:text-xl">
          Soy <strong className="text-blue-300">frontend developer</strong> con
          interés en adquirir experiencia laboral y seguir aprendiendo para
          aportar valor a proyectos digitales.
        </p>
        <div className="flex gap-4">
          <Button>Envíame un correo</Button>
          <Button>Linkedin</Button>
        </div>
      </div>
      <div className="flex items-center justify-center"></div>
    </div>
  );
}
