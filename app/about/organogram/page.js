import HeroSection from "@/app/Components/aboutUs/components/heroSection";
import OrganogramList from "@/app/Components/aboutUs/components/organogramList";

const Organogram = () => {
  return (
    <div>
      <HeroSection
        title={"Organogram"}
        bdImage={"bg-organogram"}
        subTitle={`About us/<b>Organogram</b>`}
      />
      <OrganogramList />
    </div>
  );
};
export default Organogram;
