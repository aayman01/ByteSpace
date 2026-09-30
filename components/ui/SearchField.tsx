"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function SearchField() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form
      role="search"
      className="flex items-center gap-4"
      onSubmit={handleSubmit}
    >
      <label className="flex h-[52px] w-[461px] items-center gap-2 rounded-[24px] bg-white px-6 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-lime">
        <Image
          src="/hero/icon-search.svg"
          alt=""
          width={24}
          height={24}
          unoptimized
        />
        <span className="sr-only">Search courses</span>
        <input
          type="search"
          name="query"
          placeholder="Course, topic, creator"
          className="w-full bg-transparent text-[18px] leading-[1.6] text-ink outline-none placeholder:text-muted"
        />
      </label>
      <Button type="submit">Search</Button>
    </form>
  );
}
