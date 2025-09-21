import { useContext } from "react";
import {
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  HtmlIcon,
  JavascriptIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  TailwindIcon,
  TypescriptIcon,
  WebpackIcon,
} from "../../assets/icons/icons";
import SectionHeading from "../section-heading/SectionHeading";
import SkillsCard from "./SkillsCard";
import "./skills.scss";
import { ThemeContext } from "../../App";

interface SkillsProps {}

const Skills: React.FunctionComponent<SkillsProps> = () => {
  const programmingSkills = [
    {
      name: "Typescript",
      icon: <TypescriptIcon />,
    },
    {
      name: "Javascript",
      icon: <JavascriptIcon />,
    },
    {
      name: "Java",
      icon: <JavascriptIcon />, // Using JS icon as placeholder
    },
    {
      name: "Html",
      icon: <HtmlIcon />,
    },
    {
      name: "CSS",
      icon: <SassIcon />, // Using Sass icon as placeholder
    },
  ];

  const libraryFrameworks = [
    {
      name: "React",
      icon: <ReactIcon />,
    },
    {
      name: "Next.js",
      icon: <ReactIcon />, // Using React icon as placeholder
    },
    {
      name: "Angular",
      icon: <ReactIcon />, // Using React icon as placeholder
    },
    {
      name: "Redux",
      icon: <ReduxIcon />,
    },
    {
      name: "Tailwind",
      icon: <TailwindIcon />,
    },
    {
      name: "Node.js",
      icon: <JavascriptIcon />, // Using JS icon as placeholder
    },
    {
      name: "Express.js",
      icon: <JavascriptIcon />, // Using JS icon as placeholder
    },
    {
      name: "Spring Boot",
      icon: <JavascriptIcon />, // Using JS icon as placeholder
    },
  ];

  const toolsSkills = [
    {
      name: "Git",
      icon: <GitIcon />,
    },
    {
      name: "GitHub",
      icon: <GitIcon />, // Using Git icon as placeholder
    },
    {
      name: "VS Code",
      icon: <GitIcon />, // Using Git icon as placeholder
    },
    {
      name: "MongoDB",
      icon: <FirebaseIcon />, // Using Firebase icon as placeholder
    },
    {
      name: "REST APIs",
      icon: <WebpackIcon />, // Using Webpack icon as placeholder
    },
    {
      name: "Responsive Design",
      icon: <FigmaIcon />, // Using Figma icon as placeholder
    },
  ];

  const theme = useContext(ThemeContext);

  return (
    <div
      className={theme.isDarkmode ? "skillscontainerDark" : "skillscontainer"}
    >
      <div className="skillsWrapper">
        <SectionHeading sectionName="Skills" />
        <div className="flexSkills">
          <div className="progLangs">
            <h3 className="skill-head">Programming Languages</h3>
            <div className="skillsWrap">
              {programmingSkills.map((skill) => (
                <SkillsCard
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                />
              ))}
            </div>
          </div>
          <div className="libraries">
            <h3 className="skill-head">Libraries & Frameworks</h3>
            <div className="skillsWrap">
              {libraryFrameworks.map((skill) => (
                <SkillsCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
          <div className="tools">
            <h3 className="skill-head">Tools & Platforms</h3>
            <div className="skillsWrap">
              {toolsSkills.map((skill) => (
                <SkillsCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
