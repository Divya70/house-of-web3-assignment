const ProductDetailsSimmerUI = () => {
  return (
    <div className="flex flex-col gap-5 m-8 md:flex-row" data-testid="product-details-simmer">
      <div className="w-full bg-gray-300 h-56 animate-pulse md:w-1/2"></div>
      <div className="w-1/2">
        <div className="bg-gray-300 h-6 w-2/3 mb-4 animate-pulse"></div>
        <div className="bg-gray-300 h-4 w-1/2 mb-2 animate-pulse"></div>
        <div className="bg-gray-300 h-6 w-2/12 mb-4 animate-pulse"></div>
        <div className="bg-gray-300 h-4 w-full mb-2 animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProductDetailsSimmerUI;
