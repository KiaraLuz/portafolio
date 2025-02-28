import About from "@/components/about";
import Footer from "@/components/footer";
import Introduction from "@/components/introduction";
import Projects from "@/components/projects";
import Tecnologies from "@/components/tecnologies";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Introduction />
      <Projects />
      <Tecnologies />
      <About />
      <Footer />
    </div>
  );
}
