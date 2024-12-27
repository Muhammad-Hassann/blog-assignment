'use client'
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Header() {
  const pathname = usePathname();
  const [menuVisible, setMenuVisible] = useState(false);

  const navItems = [
    {
      name: "Home",
      slug: "/",
    },
    // {
    //   name: "Login",
    //   slug: "/login",
    // },
    // {
    //   name: "Signup",
    //   slug: "/signup",
    // },
    {
      name: "All Posts",
      slug: "/posts",
    },
    {
      name: "My Posts",
      slug: "/my-posts",
    },
    {
      name: "Add Post",
      slug: "/add-post",
    },
  ];

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <header className="py-3 bg-[#EFEFEF] pt-4 px-3">
      <div className='w-full max-w-7xl mx-auto px-4'>
        <nav className="flex justify-between">
          <div className="mr-4">
            <Link href="/">
              <h1 className="text-4xl font-bold ">
                Rise
                <span className="bg-gradient-to-r from-[#8057f5] to-[#7e56f3] bg-clip-text text-transparent text-4xl font-bold">
                  Blog
                </span>
              </h1>
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="mr-4 self-end">
              <Image
                fill
                src={menuVisible ? "/close.png" : "/navigation-bar.png"}
                id="icon"
                className="md:hidden w-8 h-8 cursor-pointer"
                onClick={toggleMenu}
                alt="Toggle Menu"
              />
            </div>
            <ul
              id="menu"
              className={`md:flex ml-auto ${menuVisible ? "block" : "hidden"}`}
            >
              {navItems.map((item) =>
                 (
                  <li key={item.name} className="mt-4">
                    <Link
                      className={`${
                        pathname === item.slug
                          ? "bg-gradient-to-r from-[#8057f5] to-[#7e56f3] bg-clip-text text-transparent"
                          : "text-black"
                      } inline-block px-6 py-2 font-semibold`}
                      href={item.slug}
                    >
                      {item.name}
                    </Link>
                  </li>
                ) 
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
