// components/Header.js
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-transparent text-primary">
      <Link href="/" className="hover:text-primary-dark">
        <div className="flex items-center space-x-2">
          <img src="logos/gbFinancelogo.svg" alt="Logo" className="h-10" />
          <div>
            <h1 className="text-lg font-semibold">FINANCE DEPARTMENT</h1>
            <p className="text-sm">Government Of The Gilgit Baltistan</p>
          </div>
        </div>
      </Link>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/about" className="hover:text-primary-dark">
              About Us
            </Link>
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
