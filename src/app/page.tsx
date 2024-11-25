import Introduction from "@/components/introduction";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Introduction />
      <Projects />
    </div>
  );
}
