import React from "react";
import PageHeader from "../Components/Common/PageHeader";
import Divider from "../Components/Common/Divider";
import WhatWeDo from "../Components/HomePage/WhatWeDo";

const WeDo = () => {
  return (
    <div>
      <PageHeader bgImg={"bg-wedo"} />
      <section className="py-12">
        <WhatWeDo />
      </section>
    </div>
  );
};

export default WeDo;
