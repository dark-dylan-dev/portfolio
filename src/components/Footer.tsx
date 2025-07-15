import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/dark-dylan-dev/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/dylan-hollemaert/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>&copy; 2025 Dylan Hollemaert | Template by <a href="https://github.com/yujisatojr/react-portfolio-template/" target="_blank" rel="noreferrer">Yuji Sato</a></p>
    </footer>
  );
}

export default Footer;