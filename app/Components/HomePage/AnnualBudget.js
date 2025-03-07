// components/AffiliatedOrganizations.js
"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeader from "./SectionHeader";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { budgetBooks } from "./BudgetBook";
import Link from "next/link";

const AnnualBudget = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-8 md:pt-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center ">
          <SectionHeader primaryText="Budget " secondaryText="Annual" />
        </div>

        <div className="relative mt-8">
          <Slider ref={sliderRef} {...settings}>
            {budgetBooks.map((book, index) => (
              <Link
                href={`/annual-budget?bookNo=${index + 1}`}
                key={book.id}
                className="px-2"
                target="_blank"
              >
                <div key={book.id} className="px-2">
                  <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                    <div className="relative w-full h-full">
                      <img
                        src={book.image}
                        alt={book.name}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-black/40 hover:bg-transparent transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>

          {/* Control Buttons - Centered at bottom */}
          <div className="flex justify-center gap-2 mt-4"></div>
        </div>
      </div>
    </section>
  );
};

export default AnnualBudget;

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 flex items-center justify-center bg-[#EDF2F7] bg-primary rounded-lg hover:bg-[#E2E8F0] transition-all absolute top-0 bottom-0 left-[-60px] m-auto"
      aria-label="Previous slide"
    >
      <IoIosArrowBack className="w-5 h-5 text-white " />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 flex items-center justify-center bg-primary rounded-lg hover:bg-[#E2E8F0] transition-all absolute top-0 bottom-0 right-[-60px] m-auto"
      aria-label="Next slide"
    >
      <IoIosArrowForward className="w-5 h-5 text-white" />
    </button>
  );
}
