import Cards from "../cards";
import aplicativo from "../../assets/icon/mobile.svg";
import eccomerce from "../../assets/icon/ecomerce.svg";
import icon from "../../assets/icon/square.svg";
import image from "../../assets/img/diferenca.svg";

const differences = [
  {
    icon: aplicativo,
    title: "Tecnologia",
    description:
      "Tecnologia de ponta aplicada ao seu projeto, utilizando as melhores ferramentas e metodologias do mercado para garantir soluções modernas e eficientes.",
  },
  {
    icon: eccomerce,
    title: "Equipe Especializada",
    description:
      "Equipe especializada composta por profissionais experientes em diversas áreas do desenvolvimento, garantindo excelência em todas as etapas do projeto. ",
  },
  {
    icon: aplicativo,
    title: "Atendimento Personalizado",
    description:
      "Atendimento personalizado, com suporte dedicado e comunicação transparente para garantir que cada detalhe do seu projeto seja atendido de forma eficiente.",
  },
  {
    icon: aplicativo,
    title: "Soluções Escaláveis",
    description:
      "Soluções escaláveis que acompanham o crescimento do seu negócio, permitindo flexibilidade e adaptação conforme as suas necessidades evoluem.",
  },
  {
    icon: aplicativo,
    title: "Compromisso",
    description:
      "Compromisso com prazos e qualidade, entregando produtos que atendem aos mais altos padrões de segurança, usabilidade e desempenho.",
  },
  {
    icon: aplicativo,
    title: "Soluções Escaláveis",
    description:
      "Inovação constante, trazendo as últimas tendências tecnológicas para impulsionar sua empresa e mantê-la competitiva no mercado.",
  },
];

export default function Differences() {
  return (
    <section className="bg-white px-30 pb-10 flex flex-col items-center justify-between gap-20">
      <div className="flex justify-between items-center h-fit">
        <div>
          <img className="w-6xl" src={image} alt="Imagem serviços" />
        </div>
        <div className="flex flex-col justify-between py-16 gap-10 w-fit">
          <div className="flex flex-col gap-4 items-start w-fit">
            <img src={icon} alt="Imagem engrenagens" />
            <h2 className="text-4xl font-semibold text-justify font-display uppercase w-min">
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
      </div>
      <Cards title="Porque escolher a pantheo.tech?" cards={differences} />
    </section>
  );
}
