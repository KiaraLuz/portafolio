import Navbar from "@/components/navbar";
import "../globals.css";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Mi portafolio, con proyectos y contactos."
        />
        <title>Kiara | Portafolio</title>
      </head>
      <body className="dark mx-auto">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="min-h-screen w-full bg-background px-6 md:px-20">
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
