import Overview from "./layouts/overview/Overview";
import "../sass/app.scss";
import Content from "./layouts/content/Content";
import { GlobalContextProvider } from "./store/context-manager";

function App() {
  return (
    <GlobalContextProvider>
      <main className="main">
        <Overview />
        <Content />
      </main>
    </GlobalContextProvider>
  );
}

export default App;
