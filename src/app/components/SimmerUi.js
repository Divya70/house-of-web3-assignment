const CardShimmer = () => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white animate-pulse">
      <div className="bg-gray-300 h-48"></div>
      <div className="px-6 py-4">
        <div className="bg-gray-300 h-6 w-2/3 mb-4"></div>
        <div className="bg-gray-300 h-4 w-1/2 mb-2"></div>
      </div>
      <div className="px-6 py-4 flex justify-between">
        <div className="bg-gray-300 h-6 w-1/2 mb-4"></div>
        <div className="bg-gray-300 h-6 w-1/3"></div>
      </div>
    </div>
  );
};

const ShimmerUi = () => {
  return (
    <div className="shimmer-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {new Array(20).fill(0).map((element, index) => {
        return (
          <div key={index} className="m-5">
            <CardShimmer />
          </div>
        );
      })}
    </div>
  );
};
export default ShimmerUi;
