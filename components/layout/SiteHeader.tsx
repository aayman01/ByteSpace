import Image from "next/image";

const navItems = [
  { href: "#home", label: "Home", active: true },
  { href: "#courses", label: "Courses", active: false },
  { href: "#creators", label: "Creators", active: false },
] as const;

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 h-[120px]">
      <a
        href="#home"
        className="absolute top-[35px] left-[122px] flex items-center gap-[8.125px] rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
      >
        <Image
          src="/hero/logo.svg"
          alt=""
          width={28.875}
          height={31.5}
          unoptimized
        />
        <span className="font-display text-[24px] leading-none text-cloud">
          ByteSpace
        </span>
      </a>
      <nav
        aria-label="Primary"
        className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-6 text-[16px] text-cloud"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime ${
              item.active ? "leading-[1.2] font-medium" : "leading-[1.6]"
            }`}
            aria-current={item.active ? "page" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="absolute top-[48px] right-[120px] flex items-center gap-6 text-[16px] leading-6 text-cloud">
        <a
          href="#sign-in"
          className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
        >
          Sign In
        </a>
        <a
          href="#join"
          className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
        >
          Join Us
        </a>
        <a
          href="#bag"
          aria-label="Shopping bag"
          className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
        >
          <Image src="/hero/icon-bag.svg" alt="" width={24} height={24} unoptimized />
        </a>
      </div>
    </header>
  );
}
