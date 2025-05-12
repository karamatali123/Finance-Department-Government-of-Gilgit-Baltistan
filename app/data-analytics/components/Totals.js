import revenue from "../../../public/images/revenue.png";
import expenditure from "../../../public/images/expence.png";
import balance from "../../../public/images/balance.png";

const Totals = () => {
  const totals = [
    {
      title: "Regular Budget",
      value: "PKR 86,600 million",
      icon: revenue.src,
    },
    {
      title: "Development Budget",
      value: "PKR 34,500 million",
      icon: expenditure.src,
    },
    { title: "Wheat Subsidy", value: "PKR 19,072 million", icon: balance.src },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
      {totals.map((total, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row gap-4 items-center text-center p-4 md:p-7 rounded-lg bg-white shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex flex-col items-center sm:items-start justify-start flex-1">
            <h3 className="text-base md:text-lg font-semibold text-black">
              {total.title}
            </h3>
            <p className="mt-2 text-sm md:text-xl text-primary text-center sm:text-left">
              {total.value}
            </p>
          </div>
          <img src={total.icon} alt={total.title} className="w-20 h-20" />
        </div>
      ))}
    </div>
  );
};

export default Totals;
