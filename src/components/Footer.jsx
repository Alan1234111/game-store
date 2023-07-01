import githubMark from "../img/github-mark.png";

function Footer() {
  return (
    <footer className="footer">
      <a className="github-link" href="https://github.com/Alan1234111">
        <img src={githubMark} alt="github link" /> Github
      </a>
    </footer>
  );
}

export default Footer;
