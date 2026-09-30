import type { ComponentProps } from "react";

const variants = {
  primary:
    "bg-lime text-ink rounded-[24px] px-6 py-3 text-[18px] leading-[1.2] font-medium",
} as const;

type ButtonProps = ComponentProps<"button"> & {
  variant?: keyof typeof variants;
};

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${variants[variant]} ${className ?? ""} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime`}
      {...props}
    />
  );
}
