import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const FooterHeader = () => (
  <div
    className="mt-16 bg-primary flex justify-between items-center  px-8  text-white"
    style={{ height: "90px" }}
  >
    <div className="flex justify-start   px-5  space-x-6">
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

    <div className="flex gap-4 ">
      <a href="#" className="text-white hover:text-gray-300">
        <FaFacebook size={25} />
      </a>
      <a href="#" className="text-white hover:text-gray-300">
        <FaTwitter size={25} />
      </a>
      <a href="#" className="text-white hover:text-gray-300">
        <FaInstagram size={25} />
      </a>
      <a href="#" className="text-white hover:text-gray-300">
        <FaLinkedin size={25} />
      </a>
    </div>
  </div>
);
export default FooterHeader;
