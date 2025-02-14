export default function ButtonComponent({
  onClick,
  text,
  className,
}: {
  onClick: () => void;
  text: string;
  className: string;
}) {
  return (
    <button
      onClick={onClick}
      className={` text-white px-4 py-2 rounded-lg font-bold ${className} shadow-button hover:bg-white hover:text-button hover:shadow-buttonHover transition-all duration-500 ease-in-out cursor-pointer `}
    >
      {text}
    </button>
  );
}
