import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://github.com/Kviponder" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/kai-ponder-b38426284/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
