import Image from "next/image";
import { ArrowIcon } from "@/components/icons/ArrowIcon";

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
        <a href="#">Instagram <ArrowIcon /></a>
        <a href="#">TikTok <ArrowIcon /></a>
        <a href="#">WhatsApp <ArrowIcon /></a>
      </div>
      <small>© 2026 REX&apos;S ICE CREAM · NAIROBI, KENYA</small>
    </footer>
  );
}
