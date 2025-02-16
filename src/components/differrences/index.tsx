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
    title: "Inovação Constante",
    description:
      "Inovação constante, trazendo as últimas tendências tecnológicas para impulsionar sua empresa e mantê-la competitiva no mercado.",
  },
];

export default function Differences() {
  return (
    <section
      id="differentials"
      className="bg-white px-4 sm:px-10 lg:px-30 pb-10 flex flex-col items-center justify-between gap-20"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="flex flex-col justify-between py-8 gap-6 w-full lg:w-1/2">
          <div className="flex flex-col gap-4 items-start">
            <img src={icon} alt="Imagem engrenagens" />
            <h2 className="text-3xl lg:text-4xl font-semibold text-justify font-display uppercase">
              Nossos Diferenciais
            </h2>
          </div>
          <p className="text-base lg:text-xl font-medium">
            Desenvolvemos soluções tecnológicas personalizadas para impulsionar
            negócios e transformar ideias em realidade. Com expertise em
            desenvolvimento sob demanda, manutenção de sistemas e produtos
            digitais inovadores, oferecemos soluções eficientes e escaláveis
            para atender às suas necessidades.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-2/3 sm:w-1/2 lg:w-7xl"
            src={image}
            alt="Imagem serviços"
          />
        </div>
      </div>
      <Cards title="Porque escolher a Pantheo.tech?" cards={differences} />
    </section>
  );
}
