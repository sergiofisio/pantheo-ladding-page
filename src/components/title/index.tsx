import image from "../../assets/icon/dot.svg";

export default function Title({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl font-semibold">{text}</h1>
      <div className="flex justify-center gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <img key={index} src={image} alt="dot" />
        ))}
      </div>
    </div>
  );
}
