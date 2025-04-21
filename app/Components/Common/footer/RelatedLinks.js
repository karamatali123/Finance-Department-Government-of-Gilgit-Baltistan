"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const links = [
  {
    title: "Finance Division Islamabad",
    link: "https://fabs.gov.pk/",
  },
  {
    title: "Finance Department Punjab",
    link: "https://finance.punjab.gov.pk/",
  },
  {
    title: "Finance Department Sindh",
    link: "https://finance.gos.pk/",
  },
  {
    title: "Finance Department KPK",
    link: "https://www.finance.gkp.pk/",
  },
  {
    title: "Finance Department Balochistan",
    link: "https://www.finance.gob.pk/",
  },
  {
    title: "Finance Department AJK",
    link: "https://www.financeajk.gok.pk/",
  },
];

const RelatedLinks = () => {
  return (
    <div className="flex flex-col items-start justify-start max-w-[400px] mt-12">
      <h2 className="text-primary text-xl font-semibold">
        <span className="text-primary">Related Links</span>
      </h2>

      <div className="mt-5 flex flex-col gap-2">
        {links.map((link) => (
          <Link
            href={link.link}
            target="_blank"
            key={link.title}
            className="flex flex-row items-center gap-3 cursor-pointer"
          >
            <FaArrowRightLong size={18} className="text-primary" />
            <p className="text-gray-700 text-base">{link.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedLinks;
