import { Link, useParams } from "react-router-dom";
import { DUMMY_PRODUCTS } from "../redux-store/helpers";
import ErrorComponent from "./ErrorComponent";
export default function ProductDetails() {
  const params = useParams();
  const productIndex = DUMMY_PRODUCTS.findIndex(
    (product) => product.id === params.id,
  );
  return (
    <>
      {productIndex >= 0 ? (
        <div>
          <h1> {params.id} </h1>
          <h2>
            <Link to=".." relative="path">
              Back
            </Link>
          </h2>
        </div>
      ) : (
        <ErrorComponent />
      )}
    </>
  );
}
