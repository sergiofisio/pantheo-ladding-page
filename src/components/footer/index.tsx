import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 sm:px-10 lg:px-30 flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left">
      <div className="w-full sm:w-1/3 flex flex-col items-center sm:items-start">
        <img src={logo} alt="LOGO PATHEO TECH" className="w-24 mb-4" />
        <p className="max-w-52 text-sm">
          Da ideia ao código. Do código ao sucesso.
        </p>
      </div>
      <div className="mt-6 sm:mt-0 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Pantheo Tech. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
