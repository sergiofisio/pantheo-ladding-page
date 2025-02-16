import image from "../../assets/icon/dot.svg";

export default function Title({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">{text}</h1>
      <div className="flex justify-center gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <img
            key={index}
            src={image}
            alt="dot"
            className="w-4 sm:w-5 lg:w-6"
          />
        ))}
      </div>
    </div>
  );
}
