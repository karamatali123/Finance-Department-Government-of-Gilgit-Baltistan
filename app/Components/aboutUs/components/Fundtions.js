const Functions = () => {
  const financeDepartmentFunctions = [
    "Management of public funds",
    "Framing of financial rules for guidance of departments",
    "Supervision of accounts of provincial departments",
    "Framing of Civil Service Rules applicable to all government servants and interpretations thereof",
    "Floatation and administration of provincial loans",
    "Examination and advice on matters affecting finances of the province directly or indirectly",
    "Administration of emoluments, pensions, and allowances",
    "Administration of public revenue",
    "Communication of financial sanctions",
    "Examination of all proposals for the increase or reduction of taxation",
    "Audit matters of provincial receipts and expenditure",
  ];
  return (
    <section className="py-16 pt-0 bg-gray-50">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-start text-primary">
          Functions
        </h1>

        <div className="py-5 ">
          <p className="text-lg text-justify ">
            The major functions of the department are mentioned below:
          </p>
          <ul className="list-disc pl-8 mt-3 text-start">
            {financeDepartmentFunctions.map((func, index) => (
              <li key={index} className="text-lg mt-2">
                {func}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Functions;
