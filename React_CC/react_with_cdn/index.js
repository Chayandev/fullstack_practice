const root = ReactDOM.createRoot(document.querySelector(".parent"));

const title = React.createElement(
  "h1",
  { id: "title" },
  "Hello React Crash Course"
);

root.render(title);
