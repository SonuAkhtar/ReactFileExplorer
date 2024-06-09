import Explorer from "./components/Explorer/Explorer";
import { ExplorerData } from "./data";

const App = () => {
  return (
    <>
      <div className="app">
        <h1>Explorer</h1>
        <Explorer data={ExplorerData} />
      </div>
    </>
  );
};

export default App;
