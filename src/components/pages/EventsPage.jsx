import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import EventsList from "../EventsList.jsx";

function EventsPage() {
  const { events } = useLoaderData();
  return (
    <Suspense fallback={<p>Loading Events...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents.events} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function fetchEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
  } else {
    const resData = await response.json();
    return {
      events: resData.events,
    };
  }
}
// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  return {
    events: fetchEvents(),
  };
}
