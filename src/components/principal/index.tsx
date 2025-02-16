import Button from "../button";
import image from "../../assets/img/principal.svg";

export default function Principal() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-4 sm:px-10 lg:px-30 py-10">
      <div className="flex flex-col justify-evenly h-full w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
          Transformamos ideias em tecnologia
        </h1>
        <p className="mt-4 text-lg text-gray-300 font-medium">
          Na <span className="text-blue">pantheo.tech</span>, criamos soluções
          digitais sob medida para o seu negócio. Do desenvolvimento de
          aplicativos e e-commerces até softwares personalizados e APIs,
          entregamos inovação com qualidade e eficiência.
        </p>
        <div className="mt-6 flex justify-center lg:justify-start">
          <Button
            text="Entre em contato"
            onClick={() => {}}
            className="bg-button"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={image}
          alt="Imagem Criação de tecnologia"
          className="w-3/4 lg:w-full"
        />
      </div>
    </section>
  );
}
