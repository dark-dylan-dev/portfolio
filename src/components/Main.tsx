import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  let linkAvatar = "https://media.licdn.com/dms/image/v2/D4E03AQHrw49sa5lv2A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727188054836?e=1755129600&v=beta&t=K3Vz_CFZj1vU6rTMvYQ0caIXcNwEqv6surXPk8Hh9nM"
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={linkAvatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/dark-dylan-dev" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/dylan-hollemaert-89b6b91b9/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Dylan Hollemaert</h1>
          <p>Game dev student</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/dark-dylan-dev" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/dylan-hollemaert-89b6b91b9/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;