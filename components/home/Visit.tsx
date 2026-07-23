import { ArrowIcon } from "@/components/icons/ArrowIcon";

export function Visit() {
  return (
    <section className="visit" id="visit">
      <div><span>COME FIND US</span><h2>TWO<br />SPOTS.</h2></div>
      <div className="visit-info">
        <div className="location-list">
          <article><span>01</span><div><h3>Westlands</h3><p>Eatery<br />Muthithi Road</p></div></article>
          <article><span>02</span><div><h3>Lavington</h3><p>Corner Mall</p></div></article>
        </div>
        <div className="hours">
          <p><span>MON — THU</span><b>12PM — 10:30PM</b></p>
          <p><span>FRI — SUN</span><b>12PM — 11PM</b></p>
        </div>
        <a href="tel:+254799371293">CALL 0799 371 293 <ArrowIcon /></a>
      </div>
    </section>
  );
}
