import EventForm from "../EventForm.jsx";
import { useRouteLoaderData } from "react-router-dom";
function EditEventPage() {
  const resData = useRouteLoaderData("event-detail");
  return <EventForm event={resData.event} />;
}

export default EditEventPage;
