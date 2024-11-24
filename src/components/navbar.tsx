import { NAVIGATION } from "@/config";

export default function Navbar() {
  return (
    <header className="z-100 md:w-[calc(100%-4rem] fixed flex h-16 w-full items-center justify-center border-b border-border bg-zinc-900 px-20">
      <nav className="w-full flex-col md:flex md:flex-row md:items-center md:justify-end">
        <div className="flex gap-8">
          {NAVIGATION.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.title}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
