import Divider from "../../Components/Common/Divider";
import PageHeader from "../../Components/Common/PageHeader";
import NotificationsTable from "../../Components/infoDesk/NotificationsTable";
import React from "react";

const Notifications = () => {
  return (
    <div>
      <PageHeader bgImg={"bg-notifications"} />
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-600 ">Notifications</h2>
          <Divider />

          <NotificationsTable />
        </div>
      </section>
    </div>
  );
};

export default Notifications;
