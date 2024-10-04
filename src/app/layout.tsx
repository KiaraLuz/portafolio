import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto w-full max-w-screen-xl bg-background px-6 text-foreground md:px-20">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
