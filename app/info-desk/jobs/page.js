import Divider from "@/app/Components/Common/Divider";
import PageHeader from "@/app/Components/Common/PageHeader";
import NotificationsTable from "@/app/Components/infoDesk/NotificationsTable";
import JobsTable from "@/app/Components/jobs/jobsTable";
import React from "react";

const Jobs = () => {
  return (
    <div>
      <PageHeader bgImg={"bg-jobs"} />
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-600 ">Jobs</h2>
          <Divider />

          <JobsTable />
        </div>
      </section>
    </div>
  );
};

export default Jobs;
