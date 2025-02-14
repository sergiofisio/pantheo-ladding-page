import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <footer className=" text-white text-center py-10 px-30">
      <div className="w-1/3 flex flex-col items-start">
        <img src={logo} alt="LOGO PATEO TECH" />
        <p className=" max-w-52 text-sm">
          Da ideia ao código. Do código ao sucesso.
        </p>
      </div>
    </footer>
  );
}
