import React from "react";

export type SectionConfig = {
  title: string;
  items: string[];
  backgroundClass: string;
  titleClass?: string;
  listClass?: string;
  borderClass?: string;
  circleClass?: string;
  imageSrc: string;
  imageClass: string;
};

type SectionCardProps = {
  config: SectionConfig;
  cardBase: string;
};

const SectionCard: React.FC<SectionCardProps> = ({ config, cardBase }) => {
  const {
    title,
    items,
    backgroundClass,
    titleClass,
    listClass,
    borderClass,
    circleClass,
    imageSrc,
    imageClass,
  } = config;

  return (
    <section
      className={`${cardBase} relative overflow-hidden px-14 py-14 lg:px-24 lg:py-20 ${backgroundClass} ${
        borderClass ?? ""
      }`}
    >
      <div className="relative z-10">
        <h2 className={`text-5xl lg:text-6xl font-extrabold ${titleClass ?? ""}`}>
          {title}
        </h2>

        <ul
          className={`mt-8 space-y-5 text-2xl lg:text-3xl leading-relaxed list-none ${
            listClass ?? ""
          }`}
        >
          {items.map((item, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-3xl leading-tight">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {circleClass && <div className={circleClass} />}

      <img src={imageSrc} alt="" aria-hidden="true" className={imageClass} />
    </section>
  );
};

export default SectionCard;
