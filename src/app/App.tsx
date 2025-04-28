import { HashRouter } from "react-router-dom";
import DashboardRoutes from "./router";

function App() {
  return (
    <>
      <HashRouter >
        <DashboardRoutes />
      </HashRouter>
    </>
  );
}

export default App;
