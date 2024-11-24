import { SOCIALS } from "@/config/index";
import Link from "next/link";

export default function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="z-100">
      <div className="border-t border-border py-4">
        <div className="grid grid-cols-2">
          {SOCIALS.map((social) => (
            <Link
              key={social.href}
              href={social.href}
              target="_blank"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {social.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
