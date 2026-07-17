import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";

function MainNavigation() {
  let id = 12;
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to="/" element={<HomePage />}>
              Home
            </Link>
          </li>
          <li>
            <Link to="events" element={<EventsPage />}>
              Events
            </Link>
          </li>
          <li>
            <Link to={`events/${id}`} element={<EventDetailPage />}>
              Event Details
            </Link>
          </li>
          <li>
            <Link to="events/new" element={<NewEventPage />}>
              New Event
            </Link>
          </li>
          <li>
            <Link to={`events/${id}/edit`} element={<EditEventPage />}>
              Edit Event
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
