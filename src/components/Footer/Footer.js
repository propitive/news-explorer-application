import githubIcon from "../../images/githubIcon.svg";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__copyright">
        © 2023 Supersite, Powered by News API
      </h2>
      <div className="footer__links">
        <a className="footer__home" href="#home">
          Home
        </a>
        <a
          className="footer__practicum"
          href="https://tripleten.com/"
          target="_blank"
        >
          Practicum
        </a>
        <a href="https://github.com/propitive" target="_blank">
          <img
            className="footer__github"
            src={githubIcon}
            alt="GitHub Icon"
          ></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
