import { useLoaderData } from "react-router-dom";
import EventsList from "../EventsList.jsx";
import ErrorPage from "./ErrorPage.jsx";

function EventsPage() {
  const response = useLoaderData();
  return response.isError ? (
    <ErrorPage title={response.errorTitle} message={response.message} />
  ) : (
    <EventsList events={response.events} />
  );
}

export default EventsPage;

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
  } else {
    return response;
  }
}
