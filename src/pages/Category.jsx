import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { products } from "../data/data";

function Category() {
  const { slug } = useParams();
  const currentCategoryArr = products.filter((product) => product.categoryId.toLowerCase() === slug);
  console.log(currentCategoryArr);
  return (
    <>
      {currentCategoryArr.length ? (
        <>
          <h1>Category {slug}</h1>
          <ul style={{ display: "flex" }}>
            {currentCategoryArr.map((item) => (
              <li key={item.id}>
                <Link to={`/product/${item.id}`}>
                  {item.name}
                  {item.price}
                  <img src={item.img} alt={item.name} style={{ width: "150px" }} />
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>404</p>
      )}
    </>
  );
}

export default Category;
