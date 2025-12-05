export type SectionConfig = {
  title: string;
  items: string[];
  backgroundClass?: string;
  titleClass?: string;
  listClass?: string;
  borderClass?: string;
  imageSrc: string;
  imageClass?: string;
  contentClass?: string;
};

type SectionCardProps = {
  config: SectionConfig;
  cardBaseClass: string;
};

const SectionCard = ({ config, cardBaseClass }: SectionCardProps) => {
  const { backgroundClass, borderClass } = config;

  return (
    <section
      className={`${cardBaseClass} relative overflow-hidden px-14 py-14 lg:px-24 lg:py-20 ${backgroundClass ?? ""} ${borderClass ?? ""}`}
    >
      <CardImage imageSrc={config.imageSrc} imageClass={config.imageClass} />
      <div className="relative z-20 flex h-full flex-col">
        <CardTitle title={config.title} titleClass={config.titleClass} />
        <CardItems
          items={config.items}
          listClass={config.listClass}
          contentClass={config.contentClass}
        />
      </div>
    </section>
  );
};

type CardImageProps = {
  imageSrc: string;
  imageClass?: string;
};

const CardImage = ({ imageSrc, imageClass }: CardImageProps) => {
  const baseClass = "absolute pointer-events-none select-none z-0";
  const defaultLayout = "inset-0 h-full w-full object-cover";
  return (
    <img
      src={imageSrc}
      alt=""
      aria-hidden="true"
      className={`${baseClass} ${imageClass ?? defaultLayout}`}
    />
  );
};

type CardTitleProps = {
  title: string;
  titleClass?: string;
};

const CardTitle = ({ title, titleClass }: CardTitleProps) => (
  <div className="flex-shrink-0 self-start">
    <h2
      className={`text-5xl lg:text-6xl font-extrabold whitespace-nowrap text-left ${titleClass ?? ""}`}
    >
      {title}
    </h2>
  </div>
);

type CardItemsProps = {
  items: string[];
  listClass?: string;
  contentClass?: string;
};

const CardItems = ({ items, listClass, contentClass }: CardItemsProps) => (
  <div className={`mt-8 ${contentClass ?? ""}`}>
    <ul className={`space-y-5 text-2xl lg:text-3xl leading-relaxed list-none ${listClass ?? ""}`}>
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span className="text-3xl leading-tight">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default SectionCard;
