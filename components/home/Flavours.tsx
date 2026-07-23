import { SectionTitle } from "./SectionTitle";

const flavours = [
  ["Caramel Lotus", "Biscoff ice cream swirled with caramel and biscuit cookies."],
  ["Mombasa Mango", "Sweet, sun-ripened mango blended into creamy tropical perfection."],
  ["New York Cheesecake", "Rich cheesecake ice cream rippled with strawberry sauce."],
  ["Somali Chai", "Spiced with cardamom, cinnamon and black tea for a rich, aromatic flavor."],
  ["Chocolate Fudge", "Decadent chocolate packed with gooey brownie chunks."],
  ["Buskut & Xalwo", "Creamy ice cream loaded with crunchy biscuit chunks and ribbons of xalwo."],
];

export function Flavours() {
  return (
    <section className="menu-section" id="signatures">
      <SectionTitle number="01">Signatures</SectionTitle>
      <div className="flavour-grid">
        {flavours.map(([name, description], index) => (
          <article className="flavour" key={name}>
            <div className={`texture t${index}`} role="img" aria-label={`${name} ice cream texture`} />
            <div className="flavour-heading"><h3>{name}</h3><span>0{index + 1}</span></div>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
