"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

export default function Navlink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Build full current URL
  const fullPath = `${pathname}${
    searchParams.toString() ? `?${searchParams.toString()}` : ""
  }`;

  const isActive = fullPath === href;

  return (
    <Link
      href={href}
      className={`font-semibold ${isActive ? "active" : "text-gray-800"}`}
    >
      {children}
    </Link>
  );
}
