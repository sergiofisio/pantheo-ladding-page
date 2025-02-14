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
    <div className="border-3 p-4 rounded-lg border-darkBlue shadow-buttonHover w-1/3">
      <div className="flex items-center gap-4">
        <img src={icon} alt={`Icone ${title}`} />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
