import {
  GithubIcon,
  LinkedInIcon,
} from "../../assets/icons/icons";
import "./socials.scss";

interface SocialsProps {}

const Socials: React.FunctionComponent<SocialsProps> = () => {
  return (
    <div className="socialswrapper">
      <a
        className="socialIcons"
        href="https://github.com/sandeep5243"
        target="_blank"
        rel="noreferrer"
        aria-label="link to sandeep's github account"
      >
        <GithubIcon />
      </a>
      <a
        className="socialIcons"
        href="https://www.linkedin.com/in/sandeep-prajapati-450808269/"
        target="_blank"
        rel="noreferrer"
        aria-label="link to sandeep's linkedin account"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
};

export default Socials;
