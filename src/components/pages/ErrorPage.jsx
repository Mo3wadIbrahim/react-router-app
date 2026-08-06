import { useRouteError } from "react-router-dom";
import MainNavigation from "../MainNavigation.jsx";
import classes from "./ErrorPage.module.css";
// import EventsNavigation from "../EventsNavigation.jsx";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "Error: An Error Occurred!";
  let message = "Something went wrong!";
  if (error.status === 500) {
    title = "Error: Internal Server Error";
    message = JSON.parse(error.data).message;
  }
  if (error.status === 404) {
    title = "Error: Not Found";
    message = "Page not found";
  }
  return (
    <>
      <MainNavigation />
      {/* <EventsNavigation /> */}
      <div className={classes["error-content"]}>
        <h1>{title} !</h1>
        <p>{message}</p>
      </div>
    </>
  );
}
