"use client";
import React, { useState } from "react";
import Link from "next/link";
import logo from "../../../public/logos/gbFinancelogo.svg";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Main header links with possible sub-items
const headerLinks = [
  {
    title: "About Us",
    link: "/about",

    subItems: [
      { title: "Overview", link: "/about/overview" },
      { title: "Core Team", link: "/about/coreTeam" },
      { title: "Organogram", link: "/about/organogram" },
      { title: "Our Divisions", link: "/about/divisions" },
    ],
  },
  { title: "What We Do", link: "/what-we-do" },
  { title: "Initiatives", link: "/initiatives" },
  {
    title: "Info Desk",
    link: "/info-desk",
    subItems: [
      { title: "Notifications", link: "/info-desk/notifications" },
      { title: "Jobs", link: "/info-desk/jobs" },
      { title: "Downloads", link: "/info-desk/downloads" },
      {
        title: "Right to information",
        link: "/info-desk/right-to-information",
      },
    ],
  },
  { title: "Media Room", link: "/media-room" },
  { title: "Annual Budget", link: "/annual-budget" },
];

const Header = () => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const isActive = (link) => pathname?.includes(link);

  return (
    <header className="flex justify-between items-center py-4 px-8 absolute top-0 text-primary w-full bg-black z-10 bg-opacity-70">
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
          {headerLinks.map((item, index) => (
            <li
              key={index}
              className={`relative group p-1  ${
                isActive(item.link)
                  ? "border-b-[3px] font-extrabold border-primary"
                  : " text-white"
              }`}
            >
              {item.subItems ? (
                <>
                  {/* Main link with dropdown */}
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="hover:text-primary-dark focus:outline-none"
                  >
                    {item.title}
                  </button>
                  {activeDropdown === index && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-20">
                      {item.subItems.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className={`border-b ${
                            isActive(subItem.link)
                              ? "bg-primary text-white"
                              : " text-primary"
                          }`}
                        >
                          <Link
                            href={subItem.link}
                            className="block px-4 py-2 hover:bg-gray-200"
                            onClick={closeDropdown}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link href={item.link} className="hover:text-primary-dark">
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-2 rounded-full bg-transparent border text-white"
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
