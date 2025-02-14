import Button from "../button";
import image from "../../assets/img/principal.svg";

export default function Principal() {
  return (
    <section className="flex items-center justify-between gap-10  px-30">
      <div className="flex flex-col justify-evenly h-full w-1/2">
        <h1 className="text-6xl font-bold text-white leading-tight">
          Transformamos ideias em tecnologia
        </h1>
        <p className="mt-4 text-lg text-white font-bold">
          Na <span className="text-blue">pantheo.tech</span>, criamos soluções
          digitais sob medida para o seu negócio. Do desenvolvimento de
          aplicativos e e-commerces até softwares personalizados e APIs,
          entregamos inovação com qualidade e eficiência.
        </p>
        <Button
          text="Entre em contato"
          onClick={() => {}}
          className="w-1/3 bg-button"
        />
      </div>
      <img src={image} alt="Imagem Criação de tecnologia" />
    </section>
  );
}
