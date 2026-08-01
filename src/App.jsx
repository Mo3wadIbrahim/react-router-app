// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import EventsPage, {
  loader as loaderData,
} from "./components/pages/EventsPage";
import EventDetailPage, {
  loader as eventDetailsLoader,
} from "./components/pages/EventDetailPage";
import NewEventPage, {
  action as newEventAction,
} from "./components/pages/NewEventPage";
import EditEventPage, {
  action as editEventAction,
} from "./components/pages/EditEventPage";
import MainLayout from "./components/pages/MainLayout";
import EventsLayout from "./components/pages/EventsLayout";
import ErrorPage from "./components/pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    HydrateFallback: () => <p>Loading initial data...</p>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventsLayout />,

        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: loaderData,
          },
          {
            path: ":id",
            id: "event-detail",
            loader: eventDetailsLoader,
            children: [
              {
                index: ":id",
                element: <EventDetailPage />,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: editEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: newEventAction,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
