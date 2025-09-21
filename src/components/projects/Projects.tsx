import { useContext } from "react";
import ProjectCard from "../project-card/ProjectCard";
import SectionHeading from "../section-heading/SectionHeading";
import "./projects.scss";
import { ThemeContext } from "../../App";
import { useLocation } from "react-router-dom";

interface ProjectsProps {}

export const projects = [
  {
    name: "Leamigo Platform UI",
    description:
      "Designed and deployed the live user interface for Leamigo, focusing on enhancing user engagement and ensuring a seamless user experience. Developed reusable and modular React components to improve maintainability and scalability.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
    url: "https://leamigo.com/",
    techStack: ["React JS", "JavaScript", "Tailwind CSS", "Next JS", "Redux", "Axios", "Node JS"],
  },
  {
    name: "Eazybyts Infotech Web Application",
    description:
      "Contributed to the development of a Java-based web application, working across both the frontend and backend to deliver a scalable and efficient solution. Developed backend logic using Java and Spring Boot to ensure secure, scalable functionality.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=center",
    url: "https://eazybyts.com/",
    techStack: [
      "Java",
      "Spring Boot",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
    ],
  },
  {
    name: "Personal Portfolio Website",
    description:
      "A responsive portfolio website built with React and modern web technologies to showcase my projects, skills, and professional experience. Features smooth animations, dark/light mode, and mobile-first design.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center",
    url: "https://sandeep-prajapati-portfolio.netlify.app/",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Netlify"],
  },
  {
    name: "Full Stack E-commerce Platform",
    description:
      "A complete e-commerce solution with user authentication, product management, shopping cart, and payment integration. Built with modern technologies for optimal performance and user experience.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
    url: "https://github.com/sandeep-prajapati/ecommerce-platform",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Stripe API",
    ],
  },
];

const Projects: React.FunctionComponent<ProjectsProps> = () => {
  const theme = useContext(ThemeContext);
  const location = useLocation();
  return (
    <div
      className={theme.isDarkmode ? "projectContainerDark" : "projectContainer"}
    >
      <div
        className={theme.isDarkmode ? "projectWrapperDark" : "projectWrapper"}
      >
        {location.pathname === "/" && (
          <SectionHeading sectionName="Selected Projects" />
        )}
        <div className="projects">
          {projects.map((project, index) => (
            <ProjectCard
              projectName={project.name}
              image={project.image}
              description={project.description}
              key={project.name}
              link={project.url}
              index={index + 1}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
