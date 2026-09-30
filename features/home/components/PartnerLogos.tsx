import Image from "next/image";

const partners = [
  { src: "/partners/waves.svg", width: 167, height: 41 },
  { src: "/partners/sun.svg", width: 168, height: 41 },
  { src: "/partners/bolt.svg", width: 170, height: 41 },
  { src: "/partners/clover.svg", width: 170, height: 41 },
  { src: "/partners/rings.svg", width: 169, height: 42 },
] as const;

export function PartnerLogos() {
  return (
    <section aria-label="Partners" className="partner-bar">
      <ul className="partner-row">
        {partners.map((logo) => (
          <li key={logo.src}>
            <Image
              src={logo.src}
              alt=""
              width={logo.width}
              height={logo.height}
              unoptimized
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
