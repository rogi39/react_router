import { useParams, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { products } from "../data/data";

function Category() {
  const { slug } = useParams();
  const [sortParams, setSortParams] = useSearchParams();
  const maxPrice = sortParams.get("price") ? Number(sortParams.get("price")) : Infinity;
  const currentCategoryArr = products.filter(
    (product) => product.categoryId.toLowerCase() === slug && product.price <= maxPrice
  );

  // console.log(maxPrice);

  function handleChange(e) {
    const value = e.target.value;
    setSortParams(value ? { price: value, lalal: "qwe" } : {});
  }

  return (
    <>
      <h1>Category {slug}</h1>
      <div>
        <label>
          Max Price
          <input type="number" onChange={handleChange} value={sortParams.get("price") || ""} />
        </label>
      </div>
      <ul style={{ display: "flex", gap: "10px" }}>
        {currentCategoryArr.map((item) => (
          <li key={item.id}>
            <Link to={`/product/${item.id}`}>
              <div>{item.name}</div>
              <p>{item.price}</p>
              <img src={item.img} alt={item.name} style={{ width: "150px" }} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Category;
