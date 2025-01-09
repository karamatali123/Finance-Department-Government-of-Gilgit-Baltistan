import SectionHeader from "../../HomePage/SectionHeader";

const Functions = () => {
  const financeDepartmentFunctions = [
    "Financial policies, rules",
    "Advice to Provincial Govt on Financial Matters",
    "Budget proposals",
    "Supplementary Grants, Re-appropriation and Releases",
    "Consolidation of Expenditure Statements",
    "Creation & Continuation of Posts",
    "Internal Audit, DAC & PAC",
    "Appropriation Accounts",
    "Revenue Receipts",
    "Management of Treasuries",
    "Representation in Various Forums and Committees",
  ];
  return (
    <section className="py-16 pt-0 px-[20px] bg-white">
      <div className="container mx-auto text-center">
        <SectionHeader
          primaryText={"Mandates "}
          secondaryText={"Functions &"}
          containerClass={"text-start mb-0"}
        />

        <div className="py-1 ">
          <p className="text-lg text-justify text-gray-900">
            The major functions of the department are mentioned below:
          </p>
          <ul className="list-disc pl-8 mt-3 text-start">
            {financeDepartmentFunctions.map((func, index) => (
              <li key={index} className="text-lg mt-2 text-gray-900">
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
