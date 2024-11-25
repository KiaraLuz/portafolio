import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Tecnologies() {
  return (
    <section className="flex flex-col gap-4">
      <h2 id="tecnologias" className="text-4xl font-bold">
        Tecnologías
      </h2>
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Frontend</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-wrap gap-2">
              <li>
                <Badge>HTML</Badge>
              </li>
              <li>
                <Badge>CSS</Badge>
              </li>
              <li>
                <Badge>JavaScript</Badge>
              </li>
              <li>
                <Badge>TypeScript</Badge>
              </li>
              <li>
                <Badge>React</Badge>
              </li>
              <li>
                <Badge>Next.js</Badge>
              </li>
              <li>
                <Badge>Vue.js</Badge>
              </li>
              <li>
                <Badge>Bootstrap</Badge>
              </li>
              <li>
                <Badge>Tailwind CSS</Badge>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Backend</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-wrap gap-2">
              <li>
                <Badge>Node JS</Badge>
              </li>
              <li>
                <Badge>Express</Badge>
              </li>
              <li>
                <Badge>MongoDB</Badge>
              </li>
              <li>
                <Badge>MySQL</Badge>
              </li>
              <li>
                <Badge>SQLserver</Badge>
              </li>
              <li>
                <Badge>Python</Badge>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Otros</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-wrap gap-2">
              <li>
                <Badge>Git</Badge>
              </li>
              <li>
                <Badge>GitHub</Badge>
              </li>
              <li>
                <Badge>Figma</Badge>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <Link
        className="flex items-start"
        target="_blank"
        href="https://drive.google.com/file/d/1Qyl7Z1ypVHCSEXyS0eXgZa9XcYob5dBp/view?usp=sharing"
      >
        <Button>Descargar CV</Button>
      </Link>
    </section>
  );
}
