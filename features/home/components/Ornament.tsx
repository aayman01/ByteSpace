import Image from "next/image";

type OrnamentProps = {
  image: string;
  mask: string;
  tint: string;
  width: number;
  height: number;
  x: number;
  y: number;
  flip?: boolean;
};

export function Ornament({
  image,
  mask,
  tint,
  width,
  height,
  x,
  y,
  flip = false,
}: OrnamentProps) {
  return (
    <div
      className="absolute overflow-hidden"
      style={{
        left: x,
        top: y,
        width,
        height,
        transform: flip ? "scaleX(-1)" : undefined,
      }}
    >
      <Image
        src={image}
        alt=""
        fill
        sizes={`${width}px`}
        className="pointer-events-none object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-hard-light"
        style={{
          backgroundColor: tint,
          maskImage: `url(${mask})`,
          WebkitMaskImage: `url(${mask})`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />
    </div>
  );
}
