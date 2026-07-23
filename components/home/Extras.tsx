import Image from "next/image";
import { SectionTitle } from "./SectionTitle";

export function Extras() {
  return (
    <section className="extras" id="extras">
      <SectionTitle number="02">Extras</SectionTitle>
      <div className="extras-grid">
        <div className="extras-copy">
          <Extra name="Cookie" price="250/-">Freshly baked in-house, soft and chewy with rich chocolate chips.</Extra>
          <Extra name="Banana pudding" price="500/-">Sweet banana custard layered with ripe bananas and graham crackers.</Extra>
          <Extra name="Milkshake" price="600/-">Any flavour, blended thick and creamy. Exactly as it should be.</Extra>
          <Extra name="Ice cream sandwich" price="650/-">Your favourite scoop tucked between two soft chocolate chip cookies.</Extra>
        </div>
        <div className="extras-art">
          <Image src="/images/icecreams/scoop-in-tray.jpg" alt="Ice cream being freshly scooped from a tray" width={2400} height={2400} />
          <div className="art-note">scooped fresh <b>↙</b></div>
        </div>
      </div>
    </section>
  );
}

function Extra({ name, price, children }: { name: string; price: string; children: React.ReactNode }) {
  return (
    <article className="extra">
      <div><h3>{name}</h3><b>{price}</b></div>
      <p>{children}</p>
    </article>
  );
}
