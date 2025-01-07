// components/AffiliatedOrganizations.js
"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeader from "./SectionHeader";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const AnnualBudget = () => {
  const sliderRef = useRef(null);
  const books = [
    {
      id: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0565/4039/7655/files/book_cover_1.png",
      title: "How to Stop Worrying and Start Living",
    },
    {
      id: 2,
      image:
        "https://cdn.shopify.com/s/files/1/0565/4039/7655/files/book_cover_1.png",
      title: "The Subtle Art of Not Giving a F*ck",
    },
    {
      id: 3,
      image:
        "https://cdn.shopify.com/s/files/1/0565/4039/7655/files/book_cover_1.png",
      title: "The Psychology of Money",
    },
    {
      id: 4,
      image:
        "https://cdn.shopify.com/s/files/1/0565/4039/7655/files/book_cover_1.png",
      title: "Principles",
    },
    {
      id: 5,
      image:
        "https://cdn.shopify.com/s/files/1/0565/4039/7655/files/book_cover_1.png",
      title: "How to Stop Worrying and Start Living",
    },
    {
      id: 6,
      image:
        "https://cdn.shopify.com/s/files/1/0565/4039/7655/files/book_cover_1.png",
      title: "The Subtle Art of Not Giving a F*ck",
    },
    {
      id: 7,
      image:
        "https://cdn.shopify.com/s/files/1/0565/4039/7655/files/book_cover_1.png",
      title: "The Psychology of Money",
    },
    {
      id: 8,
      image:
        "https://cdn.shopify.com/s/files/1/0565/4039/7655/files/book_cover_1.png",
      title: "Principles",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
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

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section className="py-8 md:pt-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center ">
          <SectionHeader primaryText="Budget " secondaryText="Annual" />
        </div>

        <div className="relative mt-8">
          <Slider ref={sliderRef} {...settings}>
            {books.map((book) => (
              <div key={book.id} className="px-2">
                <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                  <div className="relative w-full h-full">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Control Buttons - Centered at bottom */}
          <div className="flex justify-center gap-2 mt-4">
            <button
              onClick={goToPrev}
              className="w-10 h-10 flex items-center justify-center bg-[#EDF2F7] bg-primary rounded-lg hover:bg-[#E2E8F0] transition-all"
              aria-label="Previous slide"
            >
              <IoIosArrowBack className="w-5 h-5 text-white " />
            </button>

            <button
              onClick={goToNext}
              className="w-10 h-10 flex items-center justify-center bg-primary rounded-lg hover:bg-[#E2E8F0] transition-all"
              aria-label="Next slide"
            >
              <IoIosArrowForward className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnualBudget;
