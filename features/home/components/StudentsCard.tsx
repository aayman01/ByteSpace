import Image from "next/image";

const avatars = [
  "/hero/avatar-1.png",
  "/hero/avatar-2.png",
  "/hero/avatar-3.png",
  "/hero/avatar-4.png",
  "/hero/avatar-5.png",
  "/hero/avatar-6.png",
  "/hero/avatar-7.png",
] as const;

export function StudentsCard() {
  return (
    <article className="flex w-[258px] flex-col gap-2 rounded-[16px] bg-white p-4 backdrop-blur-[10px]">
      <div>
        <h2 className="text-[16px] leading-[1.2] font-medium text-ink">
          Happy Students
        </h2>
        <p className="flex items-center text-[12px] leading-[1.6]">
          <span className="text-ink">4.5 </span>
          <span className="text-muted">(240)</span>
          <Image
            src="/hero/icon-star.svg"
            alt=""
            width={13.1625}
            height={12.5676}
            unoptimized
          />
        </p>
      </div>
      <div className="flex items-center">
        {avatars.map((src) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={43}
            height={43}
            className="-mr-4 size-[43px] shrink-0 rounded-full"
          />
        ))}
        <span className="relative size-[43px] shrink-0">
          <Image
            src="/hero/badge-circle.svg"
            alt=""
            width={43}
            height={43}
            unoptimized
          />
          <span className="absolute top-[13px] left-[12px] text-[12px] leading-[1.5] font-bold text-ink">
            2K+
          </span>
        </span>
      </div>
    </article>
  );
}
