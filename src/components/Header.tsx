"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LINKS } from "../static";
import logo from "@/app/images/pngwing.com.png";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  /**
   * Determines the active class for the current link.
   * @param currentPath - The path of the link.
   * @returns A string with the active class name if the link matches the current path.
   */
  const getActiveClass = (currentPath: string): string =>
    currentPath === pathname ? "text-blue-500 underline" : "text-gray-700";

  return (
    <header className="bg-gray-100 shadow-md z-50 sticky top-0">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-xl font-semibold text-gray-800">
          <Link href={"/"}>
            <Image
              alt="Next App Logo"
              src={logo}
              width={300}
              height={300}
              className="w-30 sm:w-[40px] mx-auto rounded-sm"
              priority={true}
            />
          </Link>
        </div>
        <ul className="flex gap-6">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium transition-colors duration-300 
                  ${getActiveClass(href)}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
