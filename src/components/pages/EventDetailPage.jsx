import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../EventItem.jsx";

export default function EventDetailPage() {
  const resData = useRouteLoaderData("event-detail");
  return <EventItem event={resData.event} />;
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const response = await fetch("http://localhost:8080/events/" + params.id);
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Error: Could not fetch event." }),
      {
        status: 500,
      },
    );
  } else {
    return response;
  }
}
