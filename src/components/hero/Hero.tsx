import Socials from "../socials/Socials";
import "./hero.scss";
import { useCallback, useContext } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { ThemeContext } from "../../App";
import { RightArrowIcon } from "../../assets/icons/icons";

interface HeroProps {}

const Hero: React.FunctionComponent<HeroProps> = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);
  const isMobile = window.innerWidth <= 820;
  const theme = useContext(ThemeContext);
  return (
    <div className="hero-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 1000,
          fullScreen: { enable: false },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 5,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: theme.isDarkmode ? "#606874" : "#a6c0ea",
            },
            links: {
              color: theme.isDarkmode ? "#606874" : "#a6c0ea",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1500,
              },
              value: isMobile ? 50 : 100,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: isMobile ? false : true,
        }}
      />
      <div className={theme.isDarkmode ? "heroContainerDark" : "heroContainer"}>
        <div className="heroWrapper">
          <div className="leftHero">
            <p className="hello">
              Hello <span className="wave">👋</span>
            </p>
            <h2 className="name">I'm Sandeep Prajapati</h2>
            <p className="extraDetails">
              I'm a Full Stack Developer focused on building exceptional,
              performant web applications that scale — turning complex problems
              into clean, accessible, and user-friendly experiences using modern technologies.
            </p>
            <div className="resumeContainer">
              <a className="resume" href="https://drive.google.com/file/d/1Vz0gdECLr-EIyb0f6244KIbqvQk7yaLE/view?usp=drive_link" target="_blank">
                <p className="viewCv">
                  <span>View my resumé</span>
                  <span className="arrowIcon">
                    <RightArrowIcon />
                  </span>
                </p>
              </a>
            </div>
            <div className="socials">
              <Socials />
            </div>
          </div>
          <div className="rightHero">
        <div className="mern-logo">
          <div className="mern-text">MERN STACK</div>
          <div className="tech-stack">
            <div className="tech-item">
              <div className="tech-name">MongoDB</div>
              <div className="tech-role">Database</div>
            </div>
            <div className="tech-item">
              <div className="tech-name">Express.js</div>
              <div className="tech-role">Backend</div>
            </div>
            <div className="tech-item">
              <div className="tech-name">React.js</div>
              <div className="tech-role">Frontend</div>
            </div>
            <div className="tech-item">
              <div className="tech-name">Node.js</div>
              <div className="tech-role">Runtime</div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
