import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import Link from "next/link";
import { Button } from "./ui/button";
import { TECH_STACK } from "@/config";
import Image from "next/image";

export default function Tecnologies() {
  return (
    <section className="flex flex-col gap-4">
      <h2 id="tecnologias" className="scroll-mt-20 text-4xl font-bold">
        Tecnologías
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

      <Link
        className="flex items-start"
        target="_blank"
        href="https://drive.google.com/file/d/1ajmdUCi1fP-BMjImAAWOdGSGJWN94ggP/view?usp=sharing"
      >
        <Button>Descargar CV</Button>
      </Link>
    </section>
  );
}
