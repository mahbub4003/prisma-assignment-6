import facebook from "../assets/icons8-facebook.svg";
import linkedin from "../assets/icons8-linkedin.svg";
import github from "../assets/icons8-github.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <a
          href="https://web.facebook.com/profile.php?id=100007823118705"
          target="blank"
        >
          <img className="icons" src={facebook}></img>
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/mahbubur-rahman-4a9380102/"
          target="blank"
        >
          <img className="icon" src={linkedin}></img>
        </a>
      </div>
      <div>
        <a href="https://github.com/mahbub4003" target="blank">
          <img className="icons" src={github}></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
