const Shimmer = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 max-w-7xl mx-auto">
        {Array(16)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="bg-gray-100 animate-pulse rounded-2xl shadow-md overflow-hidden"
            >
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          ))}
      </div>
    );
  };
  
  export default Shimmer;
  