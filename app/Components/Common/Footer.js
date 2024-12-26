// components/Footer.js
import Image from "next/image";
import React from "react";
import frame from "../../../public/images/frame.png";
import ContactUs from "../HomePage/ContactUs";
import FooterHeader from "./FooterHeader";
import logo from "../../../public/logos/gbFinancelogo.svg";

const Footer = () => {
  return (
    <>
      <FooterHeader />
      <footer className="bg-gray-900 text-white py-2 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Footer Bottom */}
          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray-400">
              © Finance Department, Government of the Gilgit Baltistan
            </p>
            <p className="mt-1 text-xs sm:text-sm text-gray-400">
              Powered by:{" "}
              <a href="#" className="text-primary hover:underline">
                Gilgit Baltistan Information Technology
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
