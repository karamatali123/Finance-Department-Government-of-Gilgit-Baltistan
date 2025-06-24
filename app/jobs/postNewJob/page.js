import PostJobForm from "../components/PostJobForm";

const PostNewJob = () => {
  return (
    <div className="py-12 pt-24 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold ">Post a New Job</h1>
      <PostJobForm />
    </div>
  );
};

export default PostNewJob;
