import React from "react";
import PageHeader from "../Components/Common/PageHeader";
import Divider from "../Components/Common/Divider";
import Initiatives from "../Components/HomePage/Initiatives";
import HeroSection from "../Components/aboutUs/components/heroSection";
import HeaderSection from "./components/HeaderSection";
import Totals from "./components/Totals";
import Charts from "./components/Charts";
import FinancialRecords from "./components/FinancialRecords";
const DataAnalytics = () => {
  return (
    <div>
      <HeroSection
        title={"Data Analytics"}
        subTitle={``}
        bdImage={"bg-analytics"}
        description=""
      />
      <div className="container mx-auto px-16 py-12">
        <HeaderSection />
        <Totals />
        <Charts />
        <FinancialRecords />
      </div>
    </div>
  );
};

export default DataAnalytics;
