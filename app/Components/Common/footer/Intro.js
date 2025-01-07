import Link from "next/link";
import logo from "../../../../public/images/govLogo.png";

const Intro = () => {
  return (
    <div className="flex flex-col items-start justify-start max-w-[400px]">
      <Link href="/" className="hover:text-primary-dark flex-shrink-0">
        <div className="flex items-center justify-center gap-2">
          <img height={70} width={65} src={logo.src} alt="Logo" className="" />
          <div className="hidden xs:block">
            <h1 className="text-sm md:text-xl font-semibold text-[#02401B]">
              FINANCE DEPARTMENT
            </h1>
            <p className="text-sm md:text-sm text-[#02401B]">
              Government of Gilgit Baltistan
            </p>
          </div>
        </div>
      </Link>
      <p className="text-lg text-gray-600 mt-4">
        Provincial financial management involves overseeing and controlling
        public finances, preparing the annual budget, and addressing additional
        financial needs through supplementary estimates and excess grant
        demands. It also includes managing cash flow and financial strategies
        under ways and means to ensure fiscal discipline and support sustainable
        economic development
      </p>
    </div>
  );
};

export default Intro;
