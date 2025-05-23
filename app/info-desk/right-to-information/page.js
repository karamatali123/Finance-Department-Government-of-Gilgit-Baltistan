import Divider from "../../Components/Common/Divider";
import PageHeader from "../../Components/Common/PageHeader";
import NotificationsTable from "../../Components/infoDesk/NotificationsTable";
import React from "react";

const RightToInformation = () => {
  return (
    <div>
      <PageHeader bgImg={"bg-rightTo"} />
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-600 ">
            Right To Information
          </h2>
          <Divider />

          <NotificationsTable />
        </div>
      </section>
    </div>
  );
};

export default RightToInformation;
