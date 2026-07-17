import EventItem from "../EventItem";

const DUMMY_EVENTS = [
  {
    id: "e1",
    image: "some alt text",
    title: "Event Title",
    date: "12 May 2026",
    description: "some Information about event",
  },
  {
    id: "e2",
    image: "some alt text",
    title: "Event Title",
    date: "12 May 2026",
    description: "some Information about event",
  },
  {
    id: "e3",
    image: "some alt text",
    title: "Event Title",
    date: "12 May 2026",
    description: "some Information about event",
  },
];
export default function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>;
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <EventItem event={event} key={event.id} />
        ))}
      </ul>
    </>
  );
}
