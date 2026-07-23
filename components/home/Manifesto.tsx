import Image from "next/image";
import { ArrowIcon } from "@/components/icons/ArrowIcon";

export function Manifesto() {
  return (
    <>
      <section className="manifesto" id="classics">
        <div className="manifesto-top"><span>OUR PHILOSOPHY</span><span>(THE SHORT VERSION)</span></div>
        <p><span className="manifesto-word">WE MAKE <i>REALLY</i></span><span className="manifesto-word">GOOD ICE CREAM.</span><span className="manifesto-word">THAT&apos;S IT.</span></p>
        <div className="doodle-arrow">good stuff only <b><ArrowIcon /></b></div>
      </section>
      <figure className="sprinkle-break">
        <Image src="/images/icecreams/sprinkle-cones.jpg" alt="Colourful ice cream cones scattered with sprinkles" width={2400} height={1600} />
        <figcaption>THE MORE SPRINKLES,<br />THE BETTER.</figcaption>
      </figure>
    </>
  );
}
