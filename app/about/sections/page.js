import BudgetRecourses from "@/app/Components/aboutUs/components/BudgetRecourses";
import HeroSection from "@/app/Components/aboutUs/components/heroSection";
import PageHeader from "@/app/Components/Common/PageHeader";
import SectionHeader from "@/app/Components/HomePage/SectionHeader";
import React from "react";

const Divisions = () => {
  return (
    <div>
      <HeroSection
        title={"Sections"}
        bdImage={"bg-division"}
        subTitle={`About us/<b>Sections</b>`}
      />
      <section className="py-12">
        <div className="container mx-auto text-center">
          <BudgetRecourses />
          {/* <ExpenditureList /> */}
        </div>
      </section>
    </div>
  );
};

export default Divisions;
