import EventForm from "../EventForm.jsx";
import { useRouteLoaderData, redirect } from "react-router-dom";
function EditEventPage() {
  const resData = useRouteLoaderData("event-detail");
  return <EventForm method="PATCH" event={resData.event} />;
}

export default EditEventPage;

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request, params }) {
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  const response = await fetch("http://localhost:8080/events/" + params.id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not save event." }), {
      status: 500,
    });
  } else {
    return redirect("/events");
  }
}
