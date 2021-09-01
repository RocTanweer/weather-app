import Overview from "./layouts/overview/Overview";
import "../sass/app.scss";
import Content from "./layouts/content/Content";
import useFetch from "./hooks/useFetch";

function App() {
  useFetch("London");

  return (
    <main className="main">
      <Overview />
      <Content />
    </main>
  );
}

export default App;
