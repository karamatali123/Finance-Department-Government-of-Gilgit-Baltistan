import Head from "next/head";
import HeroSection from "../Components/HomePage/HeroSection";
import FeatureCards from "../Components/HomePage/FeatureCards";
import Initiatives from "../Components/HomePage/Initiatives";
import AllocationChart from "../Components/HomePage/AllocationChart";
import InfoDesk from "../Components/HomePage/InfoDesk";
import ContactUs from "../Components/Common/footer/ContactUs";
import WhatWeDo from "../Components/HomePage/WhatWeDo";
import AffiliatedOrganizations from "../Components/HomePage/AffiliatedOrganizations";
import LeaderShipList from "../Components/HomePage/LeaderShipList";
import FundManagement from "../Components/HomePage/FundManagement";
import AnnualBudget from "../Components/HomePage/AnnualBudget";

export default function HomePage() {
  return (
    <div className="pt-[100px]">
      <HeroSection />
      <LeaderShipList />
      <AnnualBudget />
      <FundManagement />
      <Initiatives />
      {/* <AllocationChart /> */}
      {/* <InfoDesk /> */}
      <hr />
      <AffiliatedOrganizations />
    </div>
  );
}
