import Divider from "../../Common/Divider";

const OverviewSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold  text-center text-primary">
          Overview
        </h1>
        <Divider />

        <div className="py-5 ">
          <p className="text-lg text-justify text-gray-900 ">
            The Finance Department is responsible for supervision and control of
            provincial finances, preparation of provincial budget, formulation
            of Financial Rules and Civil Services Rules relating to pay,
            perquisite and pension of civil servants, management of public debt
            and administration of affiliated organizations i.e. Local Fund Audit
            Department and Inspectorate of Treasuries and Accounts.
            Administrative Departments are required to consult the Finance
            Department in all matters which affect the finances of the province
            directly or indirectly. All important functions of the Finance
            Department, including budgeting, are performed at the Secretariat.
          </p>
        </div>
      </div>
    </section>
  );
};
export default OverviewSection;
