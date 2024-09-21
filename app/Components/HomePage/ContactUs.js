// components/ContactUs.js
import React from "react";

const ContactUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary">Contact Us</h2>
        <p className="mt-2 text-lg text-gray-600">
          Finance Department, Government of the Gilgit Baltistan
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="flex flex-col items-center">
            <div className="text-primary mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2C8.13401 2 5 5.13401 5 9C5 12.866 12 22 12 22C12 22 19 12.866 19 9C19 5.13401 15.866 2 12 2ZM12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11Z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Address</h3>
            <p className="mt-2 text-gray-600">
              Gilgit Baltistan Civil Secretariat
            </p>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col items-center">
            <div className="text-primary mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5.88235V7.52941C3 10.4814 5.09873 13.4118 7.71753 14.9066C8.84638 15.5666 10.0606 16 11.2941 16C12.5277 16 13.7419 15.5666 14.8708 14.9066C17.4896 13.4118 19.5882 10.4814 19.5882 7.52941V5.88235C19.5882 4.84197 18.7462 4 17.7059 4H6.29412C5.25374 4 4.41176 4.84197 4.41176 5.88235V7.52941M12 12V12C13.0609 12 14.0783 11.5786 14.8284 10.8284C15.5786 10.0783 16 9.06087 16 8C16 6.93913 15.5786 5.92172 14.8284 5.17157C14.0783 4.42143 13.0609 4 12 4V4C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8C8 9.06087 8.42143 10.0783 9.17157 10.8284C9.92172 11.5786 10.9391 12 12 12Z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Phone Number</h3>
            <p className="mt-2 text-gray-600">000-000000000</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <div className="text-primary mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 5H8C6.89543 5 6 5.89543 6 7V17C6 18.1046 6.89543 19 8 19H16C17.1046 19 18 18.1046 18 17V7C18 5.89543 17.1046 5 16 5Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8L12 13L21 8"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="mt-2 text-gray-600">info123@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-primary py-4 text-white text-center">
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:underline">
            Careers
          </a>
          <a href="#" className="hover:underline">
            Tenders
          </a>
          <a href="#" className="hover:underline">
            Feedback
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
          <a href="#" className="hover:underline">
            Sitemap
          </a>
        </div>

        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 2C12.48 2 8 6.48 8 12C8 17.52 12.48 22 18 22C23.52 22 28 17.52 28 12C28 6.48 23.52 2 18 2ZM11.6 15.36L15.36 11.6"
              />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4H20V20H4V4Z"
              />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M22 3C23.1046 3 24 3.89543 24 5C24 6.10457 23.1046 7 22 7C20.8954 7 20 6.10457 20 5C20 3.89543 20.8954 3 22 3ZM19 9H5C4.44771 9 4 9.44771 4 10V18C4 18.5523 4.44771 19 5 19H19C19.5523 19 20 18.5523 20 18V10C20 9.44771 19.5523 9 19 9Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
