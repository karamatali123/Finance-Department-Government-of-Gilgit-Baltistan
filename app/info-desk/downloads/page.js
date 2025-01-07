"use client";
import HeroSection from "@/app/Components/aboutUs/components/heroSection";
import Divider from "@/app/Components/Common/Divider";
import PageHeader from "@/app/Components/Common/PageHeader";
import NotificationsTable from "@/app/Components/infoDesk/NotificationsTable";
import { client } from "@/app/lib/contentful";
import React, { useEffect, useState } from "react";

const Downloads = () => {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const { items } = await client.getEntries({
          content_type: "financeDepartmentGb", // Replace with your Contentful content type ID
        });
        console.log(items, "items");
        const downloads = items[0].fields.dowloads;
        const docs = downloads?.map((download, index) => {
          console.log(download.fields, "download");
          return {
            id: index + 1,
            title: download.fields.title,
            url: download.fields.file.url,
            filename: download.fields.file.fileName,
          };
        });

        setDocuments(docs);
      } catch (error) {
        console.error("Error fetching social links:", error);
      } finally {
      }
    };

    fetchSocialLinks();
  }, []);

  return (
    <div>
      <HeroSection
        title={"Downloads"}
        bdImage={"bg-downloads"}
        subTitle={``}
        description="Access comprehensive budget documents and financial reports for the Government of Gilgit Baltistan"
      />
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-600 ">Downloads</h2>
          <Divider />

          <NotificationsTable data={documents} />
        </div>
      </section>
    </div>
  );
};

export default Downloads;
