"use client";

import { Navbar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbBrandNextjs } from "react-icons/tb";
import { HiOutlineShoppingBag, HiMagnifyingGlass } from "react-icons/hi2";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

export function Nav() {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <div className="bg-secondary fixed w-full z-20 top-0 start-0">
      <Navbar fluid className="container mx-auto px-2 md:px-5 bg-secondary">
        <Navbar.Brand href="/" className="text-primary">
          <TbBrandNextjs size={24} />
          <span className="ml-1 self-center whitespace-nowrap text-xl font-semibold ">
            AutoFix
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 text-white gap-2 items-center justify-center">
          <Link href={"/cart"} className="p-2 hover:bg-white/20 rounded-full">
            <HiOutlineShoppingBag size={24} />
          </Link>
          <div className="p-2 hover:bg-white/20 rounded-full">
            <HiMagnifyingGlass size={24} />
          </div>
          <Link href="/contact" className="hidden md:block">
            <button className="btn-pri">Appointment</button>
          </Link>
          <Navbar.Toggle className="text-white bg-transparent focus:border-0 focus:bg-transparent" />
        </div>
        <Navbar.Collapse>
          {navItems.map((item) => (
            <Navbar.Link
              key={item?.href}
              href={item?.href}
              active={pathname === item?.href}
              className={
                pathname === item?.href
                  ? "!text-primary"
                  : "text-white hover:!text-primary"
              }
            >
              {item?.label}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
