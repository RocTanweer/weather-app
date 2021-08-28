import Overview from "./layouts/overview/Overview";
import "../sass/app.scss";
import Content from "./layouts/content/Content";

function App() {
  return (
    <main className="main">
      <Overview />
      <Content />
    </main>
  );
}

export default App;
