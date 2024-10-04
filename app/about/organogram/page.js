import OrganogramList from "@/app/Components/aboutUs/components/organogramLIst";

const Organogram = () => {
  return (
    <div>
      <div
        className={` relative w-full bg-full p-6   bg-no-repeat  flex items-center justify-center bg-opacity-60 bg-organogram`}
        style={{ height: "350px" }}
      ></div>
      <OrganogramList />
    </div>
  );
};
export default Organogram;
