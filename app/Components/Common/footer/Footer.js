import ContactUs from "./ContactUs";
import Intro from "./Intro";
import SocialLinks from "./SocialLinks";
import RelatedLinks from "./RelatedLinks";
const Footer = () => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <hr />
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-20 justify-start min-h-[400px] py-8 md:py-16">
        <Intro />
        <ContactUs />
        <RelatedLinks />
        <SocialLinks />
      </div>
    </div>
  );
};

export default Footer;
