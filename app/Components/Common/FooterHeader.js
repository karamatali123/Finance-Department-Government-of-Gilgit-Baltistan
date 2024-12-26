import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const FooterHeader = () => (
  <div
    className="bg-primary flex flex-col md:flex-row justify-center items-center px-4 md:px-8 py-6 md:py-0 text-white"
    style={{ minHeight: "90px" }}
  >
    {/* <div className=" container  mx-auto  text-center px-2 md:px-8 flex flex-col md:flex-row justify-start items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0"> */}
    {/* <a href="#" className="hover:underline">
        Careers
      </a>
      <a href="#" className="hover:underline">
        Tenders
      </a>
      <a href="#" className="hover:underline">
        Feedback
      </a>
      <a href="#" className="hover:underline">
        Sitemap
      </a> */}
    {/* <a href="#" className="hover:underline">
        Contact Us
      </a>
    </div> */}

    {/* <div className="flex gap-4"> */}
    <a
      href="https://www.facebook.com/p/Finance-Department-Government-of-Gilgit-Baltistan-61551044097798/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gray-300"
    >
      <FaFacebook size={25} />
    </a>
    {/* <a href="#" className="text-white hover:text-gray-300">
        <FaTwitter size={25} />
      </a>
      <a href="#" className="text-white hover:text-gray-300">
        <FaInstagram size={25} />
      </a>
      <a href="#" className="text-white hover:text-gray-300">
        <FaLinkedin size={25} />
      </a> */}
    {/* </div> */}
  </div>
);
export default FooterHeader;
