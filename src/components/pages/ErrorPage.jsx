import { useRouteError } from "react-router-dom";
import MainNavigation from "../MainNavigation.jsx";
import classes from "./ErrorPage.module.css";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "An Error Occurred!";
  let message = "Something went wrong!";
  if (error.status === 500) {
    title = "Internal Server Error";
    message = JSON.parse(error.data).message;
  }
  if (error.status === 404) {
    title = "Not Found";
    message = "Page not found";
  }
  return (
    <>
      <MainNavigation />
      <div className={classes.content}>
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </>
  );
}
