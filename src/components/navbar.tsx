export default function Navbar() {
  return (
    <header className="z-100 sticky top-0 flex h-16">
      <nav className="hidden w-full flex-col border-b border-border md:flex md:flex-row md:items-center md:justify-between">
        <div>K</div>
        <div className="flex gap-8">
          <div>Inicio</div>
          <div>Proyectos</div>
          <div>Sobre mí</div>
          <div>Contacto</div>
        </div>
      </nav>
    </header>
  );
}
