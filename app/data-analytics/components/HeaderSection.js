const HeaderSection = () => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-2xl md:text-4xl text-black font-bold">
        Financial <span className="text-primary">Analytics</span> Dashboard
      </h2>
      <p className="text-gray-600  text-xl">
        Total Budget Outlay for FY 2025-26 Rs. 140,172 million
      </p>
    </div>
  );
};

export default HeaderSection;
