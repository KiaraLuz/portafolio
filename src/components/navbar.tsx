import { NAVIGATION } from "@/config";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="md:w-[calc(100%-4rem] sticky top-0 z-50 flex h-16 w-full items-center justify-center border-b border-border bg-zinc-900 px-20">
      <nav className="w-full flex-col items-center justify-center md:flex md:flex-row">
        <div className="flex gap-8">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
