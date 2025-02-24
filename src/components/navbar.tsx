"use client";

import { useState } from "react";
import { NAVIGATION } from "@/config";
import Link from "next/link";
import ToogleTheme from "./toogleTheme";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center border-b border-border bg-background px-6 md:px-20">
      <button
        className="p-2 text-muted-foreground transition hover:text-foreground md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className="hidden flex-1 justify-center gap-8 md:flex">
        {NAVIGATION.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <div className="ml-auto">
        <ToogleTheme />
      </div>

      {isOpen && (
        <div className="items-left absolute left-0 top-16 flex h-screen w-full flex-col gap-6 bg-background px-10 py-10 md:hidden">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="animate-fade-in-left -translate-x-5 text-2xl text-muted-foreground opacity-0 transition-colors hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
