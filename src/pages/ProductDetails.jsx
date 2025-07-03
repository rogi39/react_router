import { useParams } from "react-router-dom";
import { products } from "../data/data";

function ProductDetails() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === parseInt(productId, 10));
  console.log(product);
  return (
    <>
      {product ? (
        <>
          <h1>{product.name}</h1>
          <img src={product.img} alt={product.name} style={{ width: "150px" }} />
          <p>Price: {product.price} $</p>
        </>
      ) : (
        <p>404</p>
      )}
    </>
  );
}

export default ProductDetails;
