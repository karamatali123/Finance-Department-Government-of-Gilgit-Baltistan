import OrganogramList from "@/app/Components/aboutUs/components/organogramList";
import PageHeader from "@/app/Components/Common/PageHeader";

const Organogram = () => {
  return (
    <div>
      <PageHeader bgImg={"bg-organogram"} />
      <OrganogramList />
    </div>
  );
};
export default Organogram;
