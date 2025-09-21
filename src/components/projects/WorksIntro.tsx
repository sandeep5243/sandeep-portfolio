import { useContext } from "react";
import { ThemeContext } from "../../App";

interface WorksIntroProps {}

const WorksIntro: React.FunctionComponent<WorksIntroProps> = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme.isDarkmode ? "introWrapperDark" : "introWrapper"}>
      <div className="flexWks">
        <div className="textsintro">
          <p className={theme.isDarkmode ? "intTrextDark" : "intTrext"}>
            Currently working as a Full Stack Developer Intern at LEAMIGO, focusing on
            building and maintaining web applications using React.js, Next.js, Node.js, 
            Express.js, and Tailwind CSS. Experience working with modern technologies
            to create scalable and efficient solutions across various industries.
          </p>
          <p className={theme.isDarkmode ? "belDark" : "bel"}>
            View selected projects below
          </p>
        </div>
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
  );
};

export default WorksIntro;
