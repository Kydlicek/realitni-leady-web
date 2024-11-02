"use client";
import { usePathname } from "next/navigation";

export default async function Path() {
  const pathname =
    usePathname()
      .split("/")
      .pop()
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase()) || "home";
  return pathname;
}
