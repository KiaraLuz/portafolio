"use client";

import { usePathname, useRouter } from "next/navigation";

const locales = ["en", "es"];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (locale: string) => {
    const newPath = `/${locale}${pathname.substring(3)}`; // Asumiendo que el idioma está en la URL ("/en/...")
    router.push(newPath);
  };

  return (
    <div>
      {locales.map((locale) => (
        <button key={locale} onClick={() => changeLanguage(locale)}>
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
