"use client";
import React, { useState } from "react";
import Link from "next/link";
import logo from "../../../public/images/govLogo.png";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
// Main header links with possible sub-items
const headerLinks = [
  {
    title: "About Us",
    link: "/about",
    subItems: [
      { title: "Overview", link: "/about/overview" },
      { title: "Organogram", link: "/about/organogram" },
      { title: "Sections", link: "/about/sections" },
    ],
  },
  // { title: "What We Do", link: "/what-we-do" },
  { title: "Initiatives", link: "/initiatives" },
  { title: "Annual Budget", link: "/annual-budget" },
  { title: "Data Analytics", link: "/data-analytics" },
  { title: "Downloads", link: "/info-desk/downloads" },
  { title: "Jobs", link: "/jobs/jobsList" },
  // {
  //   title: "Info Desk",
  //   link: "/info-desk",
  //   subItems: [
  //     { title: "Notifications", link: "/info-desk/notifications" },
  //     { title: "Jobs", link: "/info-desk/jobs" },
  //     { title: "Downloads", link: "/info-desk/downloads" },
  //     {
  //       title: "Right to information",
  //       link: "/info-desk/right-to-information",
  //     },
  //   ],
  // },

  // { title: "Media Room", link: "/mediaRoom" },
];

const Header = () => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  console.log(session, "session");

  const toggleDropdown = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    console.log("toggleMobileMenu", mobileMenuOpen);
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (link) => {
    return pathname?.includes(link);
  };

  return (
    <header className="py-2.5 px-4 md:px-8 absolute top-0 w-full bg-white z-40 border-b">
      <div className="flex flex-wrap justify-between items-center">
        {/* Logo Section - Updated for better mobile display */}
        <Link href="/" className="hover:text-primary-dark flex-shrink-0">
          <div className="flex items-center flex-row gap-2">
            <img
              height={35}
              width={45}
              src={logo.src}
              alt="Logo"
              className=""
            />
            <div className="hidden xs:block">
              <h1 className="text-sm md:text-lg font-semibold text-[#02401B]">
                FINANCE DEPARTMENT
              </h1>
              <p className="text-xs md:text-sm text-[#02401B]">
                Government of Gilgit Baltistan
              </p>
            </div>
          </div>
        </Link>

        {/* Navigation and Auth Button */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button - Updated for custom breakpoint */}
          <button
            className="custom:hidden text-black p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation and Search - Updated for custom breakpoint */}
        <div
          className={`w-full custom:w-auto custom:flex custom:items-center absolute custom:relative left-0 top-full custom:top-auto bg-white custom:bg-transparent ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <nav className="custom:mr-4">
            <ul className="flex flex-col custom:flex-row custom:space-x-4 space-y-2 custom:space-y-0 p-4 custom:p-0">
              {headerLinks.map((item, index) => (
                <li
                  key={index}
                  className={`relative  text-lg group p-1 whitespace-nowrap ${
                    isActive(item.link)
                      ? "border-b-[3px] font-bold border-primary text-primary"
                      : "text-black"
                  }`}
                >
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className={`hover:text-primary-dark focus:outline-none w-full text-left flex justify-between items-center ${
                          isActive(item.link) ? "text-primary" : "text-inherit"
                        }`}
                      >
                        {item.title}
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {activeDropdown === index && (
                        <ul
                          className="custom:absolute relative left-0 mt-2 w-full custom:w-48 bg-white shadow-lg border-2 border-[gray-300] rounded-lg z-20"
                          onBlur={closeDropdown}
                          onMouseLeave={closeDropdown}
                        >
                          {item.subItems.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className={`border-b last:border-b-0  rounded-md ${
                                isActive(subItem.link)
                                  ? "bg-primary text-white font-bold"
                                  : "text-primary hover:bg-gray-100 font-normal"
                              }`}
                            >
                              <Link
                                href={subItem.link}
                                className="block px-4 py-3 custom:py-2 transition-colors duration-200"
                                onClick={closeDropdown}
                              >
                                <span className="block custom:inline pl-4 custom:pl-0">
                                  {subItem.title}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.link}
                      className={`hover:text-primary-dark block ${
                        isActive(item.link) ? "text-primary" : "text-inherit"
                      }`}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {/* Auth Button */}
          {session ? (
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2"
              >
                <svg
                  className="w-8 h-8 text-gray-500 rounded-full bg-gray-100 p-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-900">
                      {session.user?.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {session.user?.email.slice(0, 20)}
                      {session.user?.email.length > 20 && "..."}
                    </p>
                  </div>
                  <button
                    onClick={async () => {
                      // Clear all caches
                      if (typeof caches !== "undefined") {
                        const cacheKeys = await caches.keys();
                        await Promise.all(
                          cacheKeys.map((key) => caches.delete(key))
                        );
                      }
                      // Clear localStorage
                      localStorage.clear();
                      // Clear sessionStorage
                      sessionStorage.clear();
                      // Sign out and redirect
                      await signOut({
                        callbackUrl: "/",
                        redirect: true,
                      });
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
