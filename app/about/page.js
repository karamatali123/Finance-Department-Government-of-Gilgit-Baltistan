import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        About Us
      </h1>

      <p className="mb-8 text-lg text-gray-600">
        Welcome to our company! We are passionate about delivering high-quality
        products and services to our customers.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Our Mission</h2>
      <p className="mb-8 text-gray-600">
        Our mission is to innovate and inspire, creating solutions that make a
        positive impact on people&apos;s lives.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Our Team</h2>
      <ul className="list-disc list-inside mb-8 text-gray-600">
        <li>John Doe - CEO</li>
        <li>Jane Smith - CTO</li>
        <li>Mike Johnson - Head of Design</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Contact Us</h2>
      <p className="text-gray-600">
        Email:{" "}
        <a
          href="mailto:info@ourcompany.com"
          className="text-blue-600 hover:underline"
        >
          info@ourcompany.com
        </a>
      </p>
      <p className="text-gray-600">Phone: (123) 456-7890</p>
    </div>
  );
};

export default AboutUs;
