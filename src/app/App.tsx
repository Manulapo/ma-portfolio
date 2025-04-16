import { BrowserRouter } from "react-router-dom";
import DashboardRoutes from "./router";

function App() {
  return (
    <>
      <BrowserRouter>
          <DashboardRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
