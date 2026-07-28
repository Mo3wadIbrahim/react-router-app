import { useLoaderData } from "react-router-dom";
import EventsList from "../EventsList.jsx";

function EventsPage() {
  const events = useLoaderData();
  return <EventsList events={events} />;
}

export default EventsPage;
