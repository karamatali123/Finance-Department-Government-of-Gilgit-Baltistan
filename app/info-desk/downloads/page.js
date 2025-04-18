"use client";
import HeroSection from "../../Components/aboutUs/components/heroSection";
import DownloadsTable from "./DownloadsTable";

const Downloads = () => {
  return (
    <div>
      <HeroSection
        title={"Downloads"}
        bdImage={"bg-downloads"}
        subTitle={``}
        description="Access comprehensive budget documents and financial reports for the Government of Gilgit Baltistan"
      />
      <section className="py-12">
        <div className="container mx-auto text-center">
          <DownloadsTable />
        </div>
      </section>
    </div>
  );
};

export default Downloads;
