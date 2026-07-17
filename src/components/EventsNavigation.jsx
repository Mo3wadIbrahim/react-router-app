import { useState } from "react";
import classes from "./EventsNavigation.module.css";
import { NavLink } from "react-router-dom";
function EventsNavigation() {
  const [eventID, setEventID] = useState("");
  return (
    <header className={classes.header}>
      <nav>
        <input
          type="text"
          placeholder="Enter Event ID"
          value={eventID}
          onChange={(ev) => setEventID(ev.target.value)}
        />
        <hr />
        <ul className={classes.list}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
              to={`${eventID}`}
            >
              Event Details
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
              to="new"
            >
              New Event
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
              to={`${eventID}/edit`}
            >
              Edit Event
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
