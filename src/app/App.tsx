import { BrowserRouter } from "react-router-dom";
import DashboardRoutes from "./router";

function App() {
  return (
    <>
      <BrowserRouter basename="/ma-portfolio">
        <DashboardRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
