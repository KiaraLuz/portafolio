"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function ToogleLanguage() {
  const router = useRouter();
  const pathname = usePathname();
  const isSpanish = pathname.startsWith("/es");

  const toggleLanguage = () => {
    const newLocale = isSpanish ? "en" : "es";
    router.push(`/${newLocale}${pathname.substring(3)}`);
  };

  return (
    <div className="flex items-center space-x-4">
      <button onClick={toggleLanguage} className="rounded-lg p-2">
        {isSpanish ? (
          <img src="/svgs/flag-us.svg" alt="US Flag" className="w-6" />
        ) : (
          <img src="/svgs/flag-spain.svg" alt="Spain Flag" className="w-6" />
        )}
      </button>
    </div>
  );
}
