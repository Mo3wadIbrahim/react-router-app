export default function ErrorPage({ title, message }) {
  return (
    <>
      <h3>Error: {title}</h3>
      <h3>Message: {message} </h3>;
    </>
  );
}
