import Image from "next/image";

export function Footer() {
  return (
    <footer>
      <Image
        className="footer-logo"
        src="/blackclearbglogo.png"
        alt="Rex's Ice Cream"
        width={1024}
        height={1024}
      />
      <div>
        <a href="#">Instagram ↗</a>
        <a href="#">TikTok ↗</a>
        <a href="#">WhatsApp ↗</a>
      </div>
      <small>© 2026 REX&apos;S ICE CREAM · NAIROBI, KENYA</small>
    </footer>
  );
}
