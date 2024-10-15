import React from "react";
import PageHeader from "../Components/Common/PageHeader";
import Divider from "../Components/Common/Divider";

const WeDo = () => {
  return (
    <div>
      <PageHeader bgImg={"bg-wedo"} />
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-600 ">What we do</h2>
          <Divider />
        </div>
      </section>
    </div>
  );
};

export default WeDo;
