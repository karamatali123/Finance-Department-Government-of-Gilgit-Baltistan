import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import JobApplicationForm from "../components/JobApplicationForm";
import PageHeader from "../../Components/Common/PageHeader";
export default async function JobsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <div>
      <PageHeader bgImg={"bg-apply"} />
      <div className="py-12 max-w-7xl mx-auto">
        <JobApplicationForm />
      </div>
    </div>
  );
}
