import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (href: string) => {
    setMenuOpen(false);
    const element = document.querySelector(href) as HTMLElement | null;
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`w-full top-0 left-0 z-50 bg-gray-900 text-white transition-all duration-300 ${
        scrolled ? "shadow-md py-3 fixed" : "flex py-4 h-40"
      }`}
    >
      <div className="w-full flex items-center justify-between px-6 lg:px-30">
        <img
          src={logo}
          alt="logo Patheo Tech"
          className={`${scrolled ? "h-10" : "h-30"}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
        <button
          className="lg:hidden text-white p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <nav
          className={`lg:flex ${
            menuOpen ? "block" : "hidden"
          } lg:relative w-full lg:w-auto bg-gray-800 lg:bg-transparent p-4 lg:p-0 transition-all duration-300 ease-in-out z-50`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6">
            {links.map((link, key) => (
              <li key={key} className="py-2 lg:py-0 text-center lg:text-left">
                <button
                  className="text-white hover:underline transition-all duration-300 block w-full text-left"
                  onClick={() => scrollToSection(link.href)}
                >
                  {link.title}
                </button>
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
      </div>
    </header>
  );
}
