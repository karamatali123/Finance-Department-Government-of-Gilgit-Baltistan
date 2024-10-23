import Head from "next/head";
import HeroSection from "@/app/Components/HomePage/HeroSection";
import FeatureCards from "@/app/Components/HomePage/FeatureCards";
import Initiatives from "@/app/Components/HomePage/Initiatives";
import AllocationChart from "@/app/Components/HomePage/AllocationChart";
import InfoDesk from "@/app/Components/HomePage/InfoDesk";
import ContactUs from "@/app/Components/HomePage/ContactUs";
import WhatWeDo from "@/app/Components/HomePage/WhatWeDo";
import AffiliatedOrganizations from "@/app/Components/HomePage/AffiliatedOrganizations";
import LeaderShipList from "../Components/HomePage/LeaderShipList";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureCards />

      <WhatWeDo />
      <LeaderShipList />
      <Initiatives />
      <AllocationChart />
      <InfoDesk />
      <AffiliatedOrganizations />
      <ContactUs />
    </>
  );
}
