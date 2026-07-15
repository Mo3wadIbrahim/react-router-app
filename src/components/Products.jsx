import { Link } from "react-router-dom";

let DUMMY_PRODUCTS = [];
for (let i = 0; i <= 503; i++) {
  DUMMY_PRODUCTS.push({
    id: `p${i}`,
    title: `Product #${i}`,
  });
}

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
