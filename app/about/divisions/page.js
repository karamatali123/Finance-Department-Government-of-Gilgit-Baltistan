import BudgetRecourses from "@/app/Components/aboutUs/components/BudgetRecourses";
import ExpenditureList from "@/app/Components/aboutUs/components/ExpenditureList";
import Divider from "@/app/Components/Common/Divider";
import React from "react";

const Divisions = () => {
  return (
    <div>
      <div
        className={` relative w-full bg-full p-6   bg-no-repeat  flex items-center justify-center bg-opacity-60 bg-organogram`}
        style={{ height: "350px" }}
      ></div>
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-600 ">Our Divisions</h2>
          <Divider />
          <p className="text-black text-start text-lg">
            All functionality of the department is performed by the below
            mentioned divisions: 
          </p>
          <BudgetRecourses />
          <ExpenditureList />
        </div>
      </section>
    </div>
  );
};

export default Divisions;
