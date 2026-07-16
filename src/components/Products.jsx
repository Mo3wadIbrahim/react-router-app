import { Link } from "react-router-dom";
import { DUMMY_PRODUCTS } from "../redux-store/helpers";

export default function Products() {
  return (
    <>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
