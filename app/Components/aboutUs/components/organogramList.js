import Divider from "../../Common/Divider";
import overviewImg from "../../../../public/images/chart.png";
import Organogram from "./organogram";

const OrganogramList = () => {
  const organograms = [
    {
      title: "Overview",
      image: overviewImg,
    },
  ];
  return (
    <div>
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-600 ">Organogram</h2>
          <Divider />
          <div>
            {organograms.map((organogram, index) => (
              <Organogram organogram={organogram} key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrganogramList;
