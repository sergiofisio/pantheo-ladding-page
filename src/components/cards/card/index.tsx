export default function Card({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border-3 p-6 rounded-lg border-darkBlue shadow-buttonHover sm:w-1/2 lg:w-1/4 ransition-all duration-300 hover:scale-105">
      <div className="flex items-center gap-4">
        <img src={icon} alt={`Ícone ${title}`} className="w-10 h-10" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
