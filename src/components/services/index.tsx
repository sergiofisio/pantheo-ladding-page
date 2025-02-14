import image from "../../assets/img/servvico.svg";
import icon from "../../assets/icon/tool.svg";
import aplicativo from "../../assets/icon/mobile.svg";
import ecomerce from "../../assets/icon/ecommerce.png";
import computer from "../../assets/icon/computer.svg";
import bug from "../../assets/icon/bug.svg";
import Cards from "../cards";

const services = [
  {
    icon: aplicativo,
    title: "Aplicativos (iOS, Android e Web)",
    description:
      "Criamos aplicativos móveis e web sob medida, com interface intuitiva, design moderno e alto desempenho, garantindo uma experiência fluida para os usuários.",
  },
  {
    icon: aplicativo,
    title: "Sites e Softwares",
    description:
      "Criamos sites institucionais e sistemas personalizados para empresas, oferecendo soluções funcionais e escaláveis para otimizar operações e melhorar a presença digital.",
  },
  {
    icon: ecomerce,
    title: "E-commerce",
    description:
      "Criamos aplicativos móveis e web sob medida, com interface intuitiva, design moderno e alto desempenho, garantindo uma experiência fluida para os usuários.",
  },
  {
    icon: aplicativo,
    title: "APIs e Interfaces",
    description:
      "Desenvolvemos APIs robustas e interfaces intuitivas para garantir integração perfeita entre sistemas, facilitando a automação e o fluxo de informações.",
  },
];

const maintenance = [
  {
    icon: computer,
    title: "Atualização e otimização",
    description:
      "Mantemos seus aplicativos e sites sempre atualizados, aplicando melhorias contínuas e adaptando-os às novas tecnologias e necessidades do mercado.",
  },
  {
    icon: bug,
    title: "Correção de bugs e melhorias",
    description:
      "Identificamos e corrigimos falhas técnicas para garantir a estabilidade e o bom funcionamento das suas soluções digitais.",
  },
];

export default function Services() {
  return (
    <section className="bg-white px-30 flex flex-col justify-between gap-20">
      <div className="flex justify-between items-center h-fit">
        <div className="flex flex-col justify-between py-16 gap-10 w-fit">
          <div className="flex flex-col gap-4 items-start w-fit">
            <img src={icon} alt="Imagem engrenagens" />
            <h2 className="text-4xl font-semibold texzt-justify font-display uppercase w-min">
              Nossos Serviços
            </h2>
          </div>
          <p className="text-xl font-medium w-1/2">
            Desenvolvemos soluções tecnológicas personalizadas para impulsionar
            negócios e transformar ideias em realidade. Com expertise em
            desenvolvimento sob demanda, manutenção de sistemas e produtos
            digitais inovadores, oferecemos soluções eficientes e escaláveis
            para atender às suas necessidades.
          </p>
        </div>
        <div>
          <img className="w-7xl" src={image} alt="Imagem serviços" />
        </div>
      </div>
      <Cards title="Desenvolvimento Sob Demanda" cards={services} />
      <Cards title="Manutenção e Suporte" cards={maintenance} />
    </section>
  );
}
