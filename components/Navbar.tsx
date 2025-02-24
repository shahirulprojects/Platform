"use client"; // use client side because we want to use hooks

import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// type for our navigation items
type NavItem = {
  label: string;
  route: string;
  imgURL: string;
};

// our default navigation items
const defaultNavItems: NavItem[] = [
  {
    label: "Home",
    route: "/",
    imgURL: "/house.svg",
  },
];

const NavContent = () => {
  const pathname = usePathname();
  const [navItems, setNavItems] = useState<NavItem[]>(defaultNavItems);

  // fetch pages when component mounts
  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await fetch("/api/pages");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const pages = await response.json();
        console.log("Fetched pages:", pages); // debug log

        if (Array.isArray(pages) && pages.length > 0) {
          // transform pages into nav items
          const pageNavItems = pages.map(
            (page: { title: string; slug: string }) => ({
              label: page.title,
              route: `/${page.slug}`,
              imgURL: "/bulb.svg", // default icon for pages
            })
          );
          // combine default items with page items
          setNavItems([...defaultNavItems, ...pageNavItems]);
        } else {
          console.log("No pages found or invalid response format");
        }
      } catch (error) {
        console.error("Error fetching pages:", error);
      }
    };

    fetchPages();
  }, []); // empty dependency array means this runs once on mount

  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {/* all of this item is retrieved from the constant folder */}
      {navItems.map((item) => {
        // checking the current path name or url
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route; // item.route.length>1 means that if the route exists

        return (
          <SheetClose asChild key={item.route}>
            {/* asChild means we will pass something into it so that it will show that something */}
            <Link
              href={item.route}
              key={item.label}
              className={`${
                isActive
                  ? "bg-emerald-400 rounded-lg text-white invert-colors"
                  : "text-white"
              } flex items-center justify-start gap-4 p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p
                className={`${isActive ? "font-bold" : "font-medium"} text-xl max-sm:text-sm`}
              >
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};
const Navbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert-colors cursor-pointer"
        />
      </SheetTrigger>
      <SheetContent side="left" className="bg-main border-x border-emerald-400">
        <SheetTitle className="hidden">Navigation Menu</SheetTitle>
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/platformlogo.svg"
            width={40}
            height={40}
            alt="The Great Great Company"
          />
          <p className="h2-bold text-white font-bold text-xl max-sm:text-sm">
            The Great Great Company
          </p>
        </Link>
        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          {/* allows scroll for left sidebar */}
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;
