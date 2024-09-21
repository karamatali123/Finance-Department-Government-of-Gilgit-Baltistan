// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Logo and Description */}
        <div>
          <div className="mb-4">
            <img
              src="logos/gbFinancelogo.svg"
              alt="Finance Department Logo"
              className="h-12"
            />
            <h2 className="text-lg font-semibold mt-2">Finance Department</h2>
            <p className="text-gray-400 text-sm">
              Government Of The Gilgit Baltistan
            </p>
          </div>
          <p className="text-gray-400 text-sm">
            Lorem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
            diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
            muvåning.
          </p>
          <div className="mt-4">
            <img
              src="/sample-image.jpg"
              alt="Sample image"
              className="h-32 w-full object-cover"
            />
          </div>
        </div>

        {/* Middle Section - Overview */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Overview</h3>
          <p className="text-gray-400 text-sm">
            The Finance Department is responsible for supervision and control of
            provincial finances, preparation of provincial budget, formulation
            of Financial Rules and Civil Services Rules relating to pay,
            perquisite and pension of civil servants...
          </p>
          <a
            href="#"
            className="text-primary hover:underline mt-2 inline-block"
          >
            Read More
          </a>
        </div>

        {/* Right Section - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">
            Contact Us
          </h3>
          <p className="text-sm text-gray-400">
            Finance Department, Government of the Gilgit Baltistan
          </p>
          <div className="mt-4">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary mr-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8L12 13L21 8M5 6H19C20.1046 6 21 6.89543 21 8V16C21 17.1046 20.1046 18 19 18H5C3.89543 18 3 17.1046 3 16V8C3 6.89543 3.89543 6 5 6Z"
                />
              </svg>
              <span className="text-sm text-gray-400">(000) 000-0000</span>
            </div>

            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary mr-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5.88235V7.52941C3 10.4814 5.09873 13.4118 7.71753 14.9066C8.84638 15.5666 10.0606 16 11.2941 16C12.5277 16 13.7419 15.5666 14.8708 14.9066C17.4896 13.4118 19.5882 10.4814 19.5882 7.52941V5.88235C19.5882 4.84197 18.7462 4 17.7059 4H6.29412C5.25374 4 4.41176 4.84197 4.41176 5.88235V7.52941M12 12V12C13.0609 12 14.0783 11.5786 14.8284 10.8284C15.5786 10.0783 16 9.06087 16 8C16 6.93913 15.5786 5.92172 14.8284 5.17157C14.0783 4.42143 13.0609 4 12 4V4C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8C8 9.06087 8.42143 10.0783 9.17157 10.8284C9.92172 11.5786 10.9391 12 12 12Z"
                />
              </svg>
              <span className="text-sm text-gray-400">info123@gmail.com</span>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary mr-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2C8.13401 2 5 5.13401 5 9C5 12.866 12 22 12 22C12 22 19 12.866 19 9C19 5.13401 15.866 2 12 2ZM12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11Z"
                />
              </svg>
              <span className="text-sm text-gray-400">
                Gilgit Baltistan Civil Secretariat.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        <p>© Finance Department, Government of the Gilgit Baltistan</p>
        <p className="mt-1">
          Powered by:{" "}
          <a href="#" className="text-primary hover:underline">
            Gilgit Baltistan Information Technology
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
