import { FaGithub, FaLinkedin } from "react-icons/fa6";
import './../styles/social.css'
export const Social = () => {
  return (
    <div className="social">
      <h2>@ Social</h2>
      <button>
        <a href="https://github.com/david87chdz" target="_blank">
          Github <FaGithub />
        </a>
      </button>
      <button>
        <a
          href="https://www.linkedin.com/in/david-cerezo-hernandez/"
          target="_blank"
        >
          Linkedin <FaLinkedin />
        </a>
      </button>
    </div>
  );
};
