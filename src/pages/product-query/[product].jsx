import ProductQuery from "@components/ProductQuery/ProductQuery";
import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  const { product } = router.query;
console.log("product", product);
  return (
    <div>
      {/* <h1>Product Query Page</h1>
      <p>Product name: {product}</p> */}
      <ProductQuery product={product} />
    </div>
  );
};

export default Product;
