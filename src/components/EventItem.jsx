import classes from "./EventItem.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";

function EventItem({ event }) {
  const { id: eventId } = useParams();
  const navigate = useNavigate();
  async function startDeleteHandler() {
    const response = await fetch("http://localhost:8080/events/" + eventId, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    navigate("/events");
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
