"use client";

import { useState } from "react";
import { NAVIGATION } from "@/config";
import Link from "next/link";
import ToogleTheme from "./toogleTheme";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          </motion.div>
        ))}
      </nav>

      <div className="ml-auto">
        <ToogleTheme />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute left-0 top-16 flex h-screen w-full flex-col gap-6 bg-background px-10 py-10 md:hidden"
          >
            {NAVIGATION.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-2xl text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
