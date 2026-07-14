import { Link } from "react-router-dom";
export default function About() {
  return (
    <div>
      <h1>Welcome to the About Page</h1>
      <p>This is the about page of our application.</p>
      <h3>
        <Link to="/">Go to Home Page</Link>
      </h3>
    </div>
  );
}
