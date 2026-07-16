import { Link } from "react-router-dom";
export default function ErrorComponent() {
  return (
    <>
      <h1>The requested page is not found</h1>
      <h2>
        <Link to=".." relative="path">
          Back
        </Link>
      </h2>
    </>
  );
}
