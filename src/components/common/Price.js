import useUtilsFunction from "@hooks/useUtilsFunction";

const Price = ({ product, price, card, currency, originalPrice }) => {
  const { getNumberTwo } = useUtilsFunction();

  // Check if we have actual price values
  const currentPrice = price || product?.prices?.price;
  const actualOriginalPrice = originalPrice || product?.prices?.originalPrice;

  return (
    <div className="font-serif product-price font-bold">
      <>
        {actualOriginalPrice >= currentPrice && (
          <span className="relative inline-block">
            <span
              className={
                card
                  ? "inline-block text-lg font-semibold text-gray-800 mr-1"
                  : "inline-block text-2xl mr-1"
              }
            >
              {currency}
              {getNumberTwo(currentPrice)}
            </span>
            <span className="relative inline-block lg:mr-3 text-xs text-gray-400 font-medium line-through">
              MRP {currency}{getNumberTwo(actualOriginalPrice)}
            </span>
          </span>
        )}
      </>
    </div>
  );
};

export default Price;
