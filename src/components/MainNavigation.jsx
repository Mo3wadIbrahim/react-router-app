import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import NewsLetter from "../components/NewsLetter.jsx";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
              to=""
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
              to="events"
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
              to="newsletter"
            >
              Newsletter
            </NavLink>
          </li>
        </ul>
      </nav>
      <NewsLetter />
    </header>
  );
}

export default MainNavigation;
