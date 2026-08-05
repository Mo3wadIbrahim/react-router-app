import { useEffect } from "react";
import { useFetcher } from "react-router-dom";
export default function NewsLetter() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;
  useEffect(() => {
    if (state === "idle" && data && data.message) {
      alert(data.message);
    }
  }, [state, data]);
  return (
    <fetcher.Form method="post" action="/newsletter">
      <input type="email" placeholder="Enter your email" required />
      <button type="submit">Subscribe</button>
    </fetcher.Form>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function action() {
  return new Response(JSON.stringify({ message: "Subscribed successfully!" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
