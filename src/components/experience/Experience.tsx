import { useContext } from "react";
import SectionHeading from "../section-heading/SectionHeading";
import "./experience.scss";
import { ThemeContext } from "../../App";

interface ExperienceProps {}

const Experience: React.FunctionComponent<ExperienceProps> = () => {
  const theme = useContext(ThemeContext);

  const experiences = [
    {
      company: "LEAMIGO",
      position: "Full Stack Developer Intern",
      duration: "2024 - Present",
      location: "Remote",
      description: "Working on building scalable web applications using modern technologies. Contributing to frontend development with React.js and backend services with Node.js and Express.js.",
      achievements: [
        "Developed responsive user interfaces using React.js and Tailwind CSS",
        "Implemented RESTful APIs using Node.js and Express.js",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Participated in code reviews and agile development processes"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "JavaScript", "Tailwind CSS", "Git"]
    },
    {
      company: "Eazybyts Infotech",
      position: "Full Stack Developer Intern",
      duration: "2023 - 2024",
      location: "Remote",
      description: "Contributed to the development of Java-based web applications, working across both frontend and backend to deliver scalable and efficient full-stack solutions.",
      achievements: [
        "Developed backend logic using Java and Spring Boot framework",
        "Created responsive web interfaces using HTML, CSS, and JavaScript",
        "Worked with MySQL database for data management and optimization",
        "Participated in full-stack testing and debugging of web applications",
        "Collaborated on end-to-end feature development from database to UI"
      ],
      technologies: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript", "MySQL"]
    }
  ];

  return (
    <div
      className={theme.isDarkmode ? "experienceContainerDark" : "experienceContainer"}
    >
      <div
        className={theme.isDarkmode ? "experienceWrapperDark" : "experienceWrapper"}
      >
        <SectionHeading sectionName="Experience" />
        <div className="experienceList">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experienceItem ${theme.isDarkmode ? "experienceItemDark" : ""}`}
            >
              <div className="experienceHeader">
                <div className="companyInfo">
                  <h3 className={theme.isDarkmode ? "companyNameDark" : "companyName"}>
                    {exp.company}
                  </h3>
                  <p className={theme.isDarkmode ? "positionDark" : "position"}>
                    {exp.position}
                  </p>
                </div>
                <div className="experienceMeta">
                  <span className={theme.isDarkmode ? "durationDark" : "duration"}>
                    {exp.duration}
                  </span>
                  <span className={theme.isDarkmode ? "locationDark" : "location"}>
                    {exp.location}
                  </span>
                </div>
              </div>
              
              <p className={theme.isDarkmode ? "descriptionDark" : "description"}>
                {exp.description}
              </p>
              
              <div className="achievements">
                <h4 className={theme.isDarkmode ? "achievementsTitleDark" : "achievementsTitle"}>
                  Key Achievements:
                </h4>
                <ul className={theme.isDarkmode ? "achievementsListDark" : "achievementsList"}>
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="technologies">
                <h4 className={theme.isDarkmode ? "techTitleDark" : "techTitle"}>
                  Technologies Used:
                </h4>
                <div className="techTags">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={theme.isDarkmode ? "techTagDark" : "techTag"}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
