import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex max-h-screen flex-col items-center justify-between pt-32 sm:flex-row">
        <div className="mb-8 flex flex-col justify-center gap-4 p-0 sm:m-0 sm:p-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Hola, soy Kiara</h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl">
            Soy <strong className="text-blue-300">frontend developer</strong>{" "}
            con interés en adquirir experiencia laboral y seguir aprendiendo
            para aportar valor a proyectos digitales.
          </p>
          <div className="flex gap-4">
            <Button>Envíame un correo</Button>
            <Button>Linkedin</Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            className="w-3/4 max-w-[300px] rounded-full sm:w-[400px]"
            src="/perfil.jpg"
            alt="kiara"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
}
