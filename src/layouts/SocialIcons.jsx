import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const SocialIcons = () => {
  const iconStyle = {
    base: 'text-boutonBase hover:text-brightColor p-2 transition-all cursor-pointer',
    // linkedin: 'hover:bg-brightColor',
    // github: 'hover:bg-brightColor',
    // twitter: 'hover:bg-brightColor',
  };

  return (
    <div className="social-icons flex items-center space-x-4 justify-center lg:justify-start mt-8">
      <a href="lien-vers-votre-profil-linkedin" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={46} className={iconStyle.base + ' ' + iconStyle.linkedin} />
      </a>
      <a href="lien-vers-votre-profil-github" target="_blank" rel="noopener noreferrer">
        <FaGithub size={46} className={iconStyle.base + ' ' + iconStyle.github} />
      </a>
      <a href="lien-vers-votre-profil-twitter" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={46} className={iconStyle.base + ' ' + iconStyle.twitter} />
      </a>
    </div>
  );
};

export default SocialIcons;
