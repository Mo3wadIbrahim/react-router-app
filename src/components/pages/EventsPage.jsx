import { useLoaderData } from "react-router-dom";
import EventsList from "../EventsList.jsx";

function EventsPage() {
  const events = useLoaderData();
  return <EventsList events={events} />;
}

export default EventsPage;

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    //
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
