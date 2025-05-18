import About from "./About";
import Certifications from "./Certifications";
import Main from "./Main";
import Projects from "./Projects-all";
import Skills from "./Skills";

const HomePage = () => {
  return (
    <div className=" md:w-[95vw]">
      <Main />
      <Skills />
      <About />
      <Projects />
      <Certifications />
      <div className="pl-5 text-muted-foreground opacity-50 text-xs">
      2025 ©Chiara Coletta All rights reserved</div>
      <div className="pl-5 text-muted-foreground opacity-50 text-xs">
      Produced by @La Porta Manuel</div>
    </div>
  );
};

export default HomePage;
