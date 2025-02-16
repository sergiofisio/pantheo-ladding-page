import Title from "../title";
import Card from "./card";

export default function Cards({
  title,
  cards,
}: {
  title: string;
  cards: { icon: string; title: string; description: string }[];
}) {
  return (
    <div className="flex flex-col gap-10 px-4 md:px-10 lg:px-20">
      <Title text={title} />
      <div className="flex flex-wrap gap-6 justify-center md:justify-evenly">
        {cards.map((service, index) => (
          <Card
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
