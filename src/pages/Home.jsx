import { Link } from "react-router-dom";
import { categories } from "../data/data";

function Home() {
  return (
    <>
      <h1>Categories</h1>
      <ul style={{ display: "flex" }}>
        {categories.map((item) => (
          <li key={item.id}>
            <Link to={`/category/${item.name.toLowerCase()}`}>
              {item.name}
              <img src={item.img} alt={item.name} style={{ width: "150px" }} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
