"use client";
import React, { useState } from "react";
import Link from "next/link";
import logo from "../../../public/logos/gbFinancelogo.svg";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);

  const aboutUsSubMenuItems = [
    { title: "Overview", link: "/about/overview", route: "overview" },
    { title: "Core Team", link: "/about/coreTeam", route: "coreTeam" },
    { title: "Organogram", link: "/about/organogram", route: "organogram" },
    { title: "Our Divisions", link: "/about/divisions", route: "divisions" },
  ];

  const toggleAboutMenu = () => {
    setIsAboutMenuOpen(!isAboutMenuOpen);
  };

  // Use item.link instead of item.route
  const isActive = (link) => pathname?.includes(link);

  return (
    <header className="flex justify-between items-center py-4 px-8  text-primary absolute top-0 w-full bg-black z-10 bg-opacity-70">
      <Link href="/" className="hover:text-primary-dark">
        <div className="flex items-center space-x-2">
          <Image
            height={75}
            width={55}
            src={logo}
            alt="Logo"
            className="h-10"
          />
          <div>
            <h1 className="text-lg font-semibold">FINANCE DEPARTMENT</h1>
            <p className="text-sm">Government Of The Gilgit Baltistan</p>
          </div>
        </div>
      </Link>
      <nav>
        <ul className="flex space-x-6 relative">
          <li className="relative group">
            {/* About Us Link */}
            <button
              onClick={toggleAboutMenu}
              className="hover:text-primary-dark focus:outline-none"
            >
              About Us
            </button>
            {/* Dropdown Menu */}
            {isAboutMenuOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-20">
                {aboutUsSubMenuItems.map((item, i) => (
                  <li
                    key={i} // Added key for each item
                    className={`border-b ${
                      isActive(item.link) ? "bg-primary text-white" : ""
                    }`}
                  >
                    <Link
                      href={item.link}
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => {
                        setIsAboutMenuOpen(false);
                      }}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link href="/what-we-do" className="hover:text-primary-dark">
              What We Do
            </Link>
          </li>
          <li>
            <Link href="/initiatives" className="hover:text-primary-dark">
              Initiatives
            </Link>
          </li>
          <li>
            <Link href="/info-desk" className="hover:text-primary-dark">
              Info Desk
            </Link>
          </li>
          <li>
            <Link href="/media-room" className="hover:text-primary-dark">
              Media Room
            </Link>
          </li>
          <li>
            <Link href="/annual-budget" className="hover:text-primary-dark">
              Annual Budget
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-1 rounded-full bg-white text-black"
        />
        <button className="text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l6-8-6-8"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
