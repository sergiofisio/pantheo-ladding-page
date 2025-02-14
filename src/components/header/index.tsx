import logo from "../../assets/logo.svg";
import Button from "../button";

const links = [
  {
    title: "Serviços",
    href: "#services",
  },
  {
    title: "Diferenciais",
    href: "#differentials",
  },
  {
    title: "Contato",
    href: "#contact",
  },
];

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-30">
      <img src={logo} alt="logo Patheo Tech" />
      <nav className="w-1/3">
        <ul className="flex justify-around space-x-4 ">
          {links.map((link, key) => {
            return (
              <li key={key}>
                <a
                  className="text-white hover:underline transition-all duration-1000 ease-in-out"
                  href={link.href}
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <Button
        text="Entre em contato"
        onClick={() => {}}
        className="w-1/5 bg-button hover:text-button"
      />
    </header>
  );
}
