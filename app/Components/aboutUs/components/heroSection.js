const HeroSection = ({ title, description, bdImage }) => {
  return (
    <>
      <div
        className={` relative w-full bg-cover p-6  h-screen bg-no-repeat flex items-center justify-center bg-opacity-60 ${bdImage}`}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="flex flex-col gap-1 text-center z-10">
          <h1 className="text-7xl font-bold mb-4 text-primary">{title}</h1>
          <p className="text-lg max-w-[1100px]  mb-4 text-white">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
