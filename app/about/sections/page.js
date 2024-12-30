import BudgetRecourses from "@/app/Components/aboutUs/components/BudgetRecourses";
import ExpenditureList from "@/app/Components/aboutUs/components/ExpenditureList";
import Divider from "@/app/Components/Common/Divider";
import PageHeader from "@/app/Components/Common/PageHeader";
import React from "react";

const Divisions = () => {
  return (
    <div>
      <PageHeader bgImg={"bg-division"} />
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-600 ">Sections</h2>
          <Divider />

          <BudgetRecourses />
          {/* <ExpenditureList /> */}
        </div>
      </section>
    </div>
  );
};

export default Divisions;
