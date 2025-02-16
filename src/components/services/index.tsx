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
    <section className="bg-white px-4 sm:px-10 lg:px-30 py-10 flex flex-col gap-20">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="flex flex-col gap-6 w-full lg:w-1/2 text-center lg:text-left">
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <img src={icon} alt="Imagem engrenagens" className="w-12" />
            <h2 className="text-3xl lg:text-4xl font-semibold uppercase">
              Nossos Serviços
            </h2>
          </div>
          <p className="text-base lg:text-lg font-medium text-gray-700">
            Desenvolvemos soluções tecnológicas personalizadas para impulsionar
            negócios e transformar ideias em realidade. Com expertise em
            desenvolvimento sob demanda, manutenção de sistemas e produtos
            digitais inovadores, oferecemos soluções eficientes e escaláveis
            para atender às suas necessidades.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img className="w-3/4 lg:w-full" src={image} alt="Imagem serviços" />
        </div>
      </div>
      <Cards title="Desenvolvimento Sob Demanda" cards={services} />
      <Cards title="Manutenção e Suporte" cards={maintenance} />
    </section>
  );
}
