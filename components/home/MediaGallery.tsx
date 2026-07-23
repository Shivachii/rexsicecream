import Image from "next/image";
import { ArrowIcon } from "@/components/icons/ArrowIcon";

export function MediaGallery() {
  return (
    <section className="media-intro" aria-label="Rex's ice cream gallery">
      <figure className="bowl-shot">
        <Image src="/images/icecreams/scoops-in-bowls.jpg" alt="Five colourful scoops of ice cream in bowls" width={2400} height={1600} />
        <figcaption><span>FIVE MOODS.</span><span>NO WRONG ANSWERS.</span></figcaption>
      </figure>
      <figure className="cone-shot">
        <Image src="/images/icecreams/empty-waffle-cone.jpg" alt="Fresh waffle cone on a blue background" width={2400} height={3000} loading="eager" fetchPriority="high" />
        <figcaption>READY FOR THE GOOD STUFF <ArrowIcon direction="up" /></figcaption>
      </figure>
    </section>
  );
}
