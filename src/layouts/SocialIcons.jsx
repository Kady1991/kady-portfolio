import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const SocialIcons = () => {
  const iconStyle = {
    base: 'text-base hover:text-brightColor p-1 transition-all cursor-pointer',
  };

  return (
    <div className="social-icons flex items-center space-x-4 justify-center lg:justify-start mt-8">
      <a href="https://www.linkedin.com/in/kady-sangare/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={36} className={iconStyle.base + ' ' + iconStyle.linkedin} />
      </a>
      <a href="https://github.com/Kady1991" target="_blank" rel="noopener noreferrer">
        <FaGithub size={36} className={iconStyle.base + ' ' + iconStyle.github} />
      </a>
      <a href="lien-vers-votre-profil-twitter" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={36} className={iconStyle.base + ' ' + iconStyle.twitter} />
      </a>
    </div>
  );
};

export default SocialIcons;
