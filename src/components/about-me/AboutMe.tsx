import { useContext } from "react";
import "./about.scss";
import { ThemeContext } from "../../App";
import AnimatedText from "../animatedText/AnimatedText";

interface AboutMeProps {}

const AboutMe: React.FunctionComponent<AboutMeProps> = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme.isDarkmode ? "abtMewrapperDark" : "abtMewrapper"}>
      <div className="abtCont">
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
        <div className="details">
          <AnimatedText
            text="Meet Sandeep Prajapati."
            className={theme.isDarkmode ? "meetDark" : "meet"}
            once
          />
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            I'm a dedicated and detail-oriented Software Engineer with experience 
            in building applications using modern technologies such as React.js, 
            Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS. I specialize 
            in designing, coding, testing, and maintaining high-performance and 
            scalable software applications.
          </p>
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            I have practical experience in developing scalable features, deploying 
            applications, and collaborating with teams to deliver real-world solutions. 
            My expertise spans both frontend and backend development, with a focus on 
            creating responsive and modern UIs while building robust backend services 
            using Java, Spring Boot, and Node.js.
          </p>
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            Currently pursuing my MSC in Computer Science and Information Technology 
            at Silver Oak University, I'm passionate about continuous learning and 
            staying updated with the latest technologies. When I'm not coding, you'll 
            find me exploring new frameworks, contributing to open-source projects, 
            or working on personal projects that challenge my skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
