import { Route, Routes } from "react-router-dom";
import GlobalLayout from "./GlobalLayout";
import About from "./routes/About";
import HomePage from "./routes/Home";
import Projects from "./routes/Projects-all";
import CertificationsSkills from "./routes/Cert-skill";
import NotFoundPage from "./routes/notFound";

const DashboardRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<CertificationsSkills />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default DashboardRoutes;
