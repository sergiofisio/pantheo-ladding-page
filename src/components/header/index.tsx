import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.svg";
import Button from "../button";

const links = [
  { title: "Serviços", href: "#services" },
  { title: "Diferenciais", href: "#differentials" },
  { title: "Contato", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-gray-900 text-white relative">
      <img src={logo} alt="logo Patheo Tech" className="h-10" />
      <button
        className="lg:hidden text-white p-2 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      <nav
        className={`lg:flex ${
          menuOpen ? "block" : "hidden"
        } absolute lg:relative top-full left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent p-4 lg:p-0 transition-all duration-300 ease-in-out z-50`}
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-6">
          {links.map((link, key) => (
            <li key={key} className="py-2 lg:py-0 text-center lg:text-left">
              <a
                className="text-white hover:underline transition-all duration-300 block"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden lg:block">
        <Button
          text="Entre em contato"
          className="bg-button hover:text-button"
          onClick={() => {}}
        />
      </div>
    </header>
  );
}
