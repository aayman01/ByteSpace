import Image from "next/image";
import { Ornament } from "@/features/home/components/Ornament";

const ornaments = [
  {
    image: "/hero/ornament-torus-right.png",
    mask: "/hero/mask-torus-right.png",
    tint: "#f5f5f6",
    x: 1127,
    y: 672,
    width: 330,
    height: 330,
  },
  {
    image: "/hero/ornament-coil.png",
    mask: "/hero/mask-coil-left.png",
    tint: "#d4fb20",
    x: -118,
    y: 221,
    width: 385,
    height: 385,
  },
  {
    image: "/hero/ornament-coil.png",
    mask: "/hero/mask-coil-small.png",
    tint: "#f5f5f6",
    x: 358,
    y: 477,
    width: 175,
    height: 175,
    flip: true,
  },
  {
    image: "/hero/cone-left.png",
    mask: "/hero/mask-cone-left.png",
    tint: "#f5f5f6",
    x: 18,
    y: 682,
    width: 342,
    height: 342,
  },
  {
    image: "/hero/cone-right.png",
    mask: "/hero/mask-cone-right.png",
    tint: "#d4fb20",
    x: 1231,
    y: 221,
    width: 370,
    height: 370,
  },
  {
    image: "/hero/cone-small.png",
    mask: "/hero/mask-cone-small.png",
    tint: "#f5f5f6",
    x: 1106,
    y: 464,
    width: 188,
    height: 188,
  },
] as const;

const photoShadow = [
  "drop-shadow(0.518px 0.741px 3.036px rgba(0,0,0,0.04))",
  "drop-shadow(2.233px 3.19px 5.723px rgba(0,0,0,0.06))",
  "drop-shadow(5.383px 7.69px 9.571px rgba(0,0,0,0.07))",
  "drop-shadow(10.208px 14.582px 16.087px rgba(0,0,0,0.08))",
  "drop-shadow(16.946px 24.209px 24px rgba(0,0,0,0.09))",
  "drop-shadow(25.838px 36.912px 36px rgba(0,0,0,0.1))",
  "drop-shadow(37.122px 53.032px 56px rgba(0,0,0,0.11))",
  "drop-shadow(51.038px 72.912px 72px rgba(0,0,0,0.13))",
].join(" ");

export function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <Image
        src="/hero/grid.svg"
        alt=""
        width={1442}
        height={1026}
        unoptimized
        className="absolute top-0 left-0"
      />
      <Image
        src="/hero/ellipse.svg"
        alt=""
        width={1149}
        height={1149}
        unoptimized
        className="absolute top-[582px] left-[calc(50%-0.5px)] -translate-x-1/2"
      />
      {ornaments.map((ornament) => (
        <Ornament key={`${ornament.image}-${ornament.x}`} {...ornament} />
      ))}
      <div
        className="absolute top-[512px] left-1/2 h-[541px] w-[578px] -translate-x-1/2"
        style={{ filter: photoShadow }}
      >
        <Image
          src="/hero/photo.png"
          alt=""
          fill
          priority
          sizes="578px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
