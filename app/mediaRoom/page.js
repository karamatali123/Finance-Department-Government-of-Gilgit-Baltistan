"use client";
import { useState } from "react";
import Divider from "../Components/Common/Divider";
import PageHeader from "../Components/Common/PageHeader";
import MediaCard from "../Components/Common/MediaCard";
import bg from "../../public/images/budget/Picture-1.png";

const MediaRoom = () => {
  const [name, setName] = useState();
  const meda = [
    { title: "media1", des: "bhsdjFlaskahs;goa;hsh,fba", imgurl: bg },
    { title: "media2", des: "bhsdjFlaskahs;goa;hsh,fba", imgurl: bg },
    { title: "media3", des: "bhsdjFlaskahs;goa;hsh,fba", imgurl: bg },
    { title: "media4", des: "bhsdjFlaskahs;goa;hsh,fba", imgurl: bg },
    { title: "media5", des: "bhsdjFlaskahs;goa;hsh,fba", imgurl: bg },
    { title: "media5", des: "bhsdjFlaskahs;goa;hsh,fba", imgurl: bg },
  ];
  const yoyo = meda.map((itm) => itm.title);

  return (
    <div className="p-12">
      <PageHeader bgImg={"bg-wedo"} name={name} />
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-600 ">What we do</h2>
          <Divider />
          <label>Enter your name</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
              console.log(e.target.value, "value");
            }}
          ></input>
          <h1>{name}</h1>
        </div>
      </section>
      <div className="w-[500px]">
        {meda.map((itm, index) => (
          <MediaCard
            key={index}
            title={itm.titlle}
            description={itm.des}
            imageUrl={itm.imgurl}
          ></MediaCard>
        ))}
      </div>
    </div>
  );
};

export default MediaRoom;
