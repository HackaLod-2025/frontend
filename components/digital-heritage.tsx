interface DigitalHeritageItemProps {
  title: string;
  description: string;
}

interface DigitalHeritageProps {
  items?: DigitalHeritageItemProps[];
}

const DigitalHeritageRow = ({ items = DEFAULT_ITEMS }: DigitalHeritageProps) => {
  return (
    <section
      aria-label="Jouw digitale erfgoedervaring details"
      className="mx-auto max-w-7xl mt-10 mb-[7rem]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <article className="rounded-2xl bg-emerald-400 text-zinc-900 p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm sm:text-base leading-relaxed">{description}</p>
    </article>
  );
}

const DEFAULT_ITEMS = [
  {
    title: "Erfgoed Agents",
    description:
      "Onze erfgoed agents verbinden jouw persoonlijke interesses met erfgoed dat bij je past. Activeer je agent en ontdek wat voor jou leeft.",
  },
  {
    title: "Alles op één plek",
    description:
      "Beheer je favorieten, bezoeken en instellingen vanuit één digitaal paspoort. Vind gemakkelijk alles terug wat je hebt ontdekt.",
  },
  {
    title: "Bepaal wat je deelt",
    description:
      "Met jouw erfgoedpaspoort bepaal jij zelf wat je deelt en met wie. Houd altijd controle over jouw eigen erfgoedervaring.",
  },
];

export { DigitalHeritageRow };
