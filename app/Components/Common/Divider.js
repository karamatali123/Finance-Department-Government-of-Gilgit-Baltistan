const Divider = () => {
  return (
    <div className="mb-8 mt-2 relative mx-auto w-fit">
      <div className="bg-grey" style={{ width: "130px", height: 2 }}></div>
      <div
        className="w-10   left-1/2 transform -translate-x-1/2 absolute h-1 bg-green-600"
        style={{ top: -1 }}
      ></div>
    </div>
  );
};
export default Divider;
