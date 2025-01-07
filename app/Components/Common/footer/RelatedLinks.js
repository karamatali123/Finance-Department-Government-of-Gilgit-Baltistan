import React from "react";
import Link from "next/link";

const links = [
  {
    title: "Finance Division Islamabad",
    link: "https://finance.gov.pk/",
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
    <div className="flex flex-col items-start justify-start max-w-[400px] mt-16">
      <h2 className="text-primary text-2xl font-semibold">Related Links</h2>

      <div className="mt-5 flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.link}
            target="_blank"
            className="text-gray-700 text-lg"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedLinks;
