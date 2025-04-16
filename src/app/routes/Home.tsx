import About from "./About";
import Certifications from "./Certifications";
import Main from "./Main";
import Projects from "./Projects-all";
import Skills from "./Skills";

const HomePage = () => {
  return (
    <div className=" w-[90vw]">
      <Main />
      <About />
      <Projects />
      <Skills />
      <Certifications />
    </div>
  );
};

export default HomePage;
