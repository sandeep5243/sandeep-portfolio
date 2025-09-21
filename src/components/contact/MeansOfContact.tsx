import { useContext } from "react";
import {
  GmailDarkIcon,
  GmailIcon,
  LinkedInContactIcon,
  GithubIcon,
} from "../../assets/icons/icons";
import ContactCard from "./ContactCard";
import "./contact.scss";
import { ThemeContext } from "../../App";

interface MeansOfContactProps {}

const MeansOfContact: React.FunctionComponent<MeansOfContactProps> = () => {
  const theme = useContext(ThemeContext);

  const contacts = [
    {
      icon: theme.isDarkmode ? <GmailDarkIcon /> : <GmailIcon />,
      appText: "Send me an email",
      appDetails: (
        <a href="mailto:sandipprajapati446@gmail.com" aria-label="send sandeep a mail">
          sandipprajapati446@gmail.com
        </a>
      ),
    },
    {
      icon: <GithubIcon />,
      appText: "Check out my GitHub",
      appDetails: (
        <a
          href="https://github.com/sandeep5243"
          target="_blank"
          rel="noreferrer"
          aria-label="check out sandeep's github profile"
        >
          @sandeep5243
        </a>
      ),
    },
    {
      icon: <LinkedInContactIcon />,
      appText: "Connect with me on LinkedIn",
      appDetails: (
        <a
          href="https://www.linkedin.com/in/sandeep-prajapati-450808269/"
          target="_blank"
          rel="noreferrer"
          aria-label="connect with Sandeep on Linkedin"
        >
          Sandeep Prajapati
        </a>
      ),
    },
  ];
  return (
    <div className={theme.isDarkmode ? "flexMeansDark" : "flexMeans"}>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.appText}
          icon={contact.icon}
          appName={contact.appText}
          details={contact.appDetails}
        />
      ))}
    </div>
  );
};

export default MeansOfContact;
