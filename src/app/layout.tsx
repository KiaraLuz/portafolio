import Navbar from "@/components/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark mx-auto">
        <Navbar />
        <div className="min-h-screen w-full bg-zinc-900 px-6 md:px-20">
          {children}
        </div>
      </body>
    </html>
  );
}
