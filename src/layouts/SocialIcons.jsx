import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiReact } from 'react-icons/si';
import { Link as RouterLink } from 'react-router-dom';

const SocialIcons = () => {
  const iconStyle = {
    base: 'text-boutonBase hover:text-brightColor p-2 transition-all cursor-pointer',
    // linkedin: 'hover:bg-brightColor',
    // github: 'hover:bg-brightColor',
    // twitter: 'hover:bg-brightColor',
  };

  return (
    <div className="social-icons flex items-center space-x-4 justify-center lg:justify-start mt-8">
      <a href="https://www.linkedin.com/in/kady-sangare/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={46} className={iconStyle.base + ' ' + iconStyle.linkedin} />
      </a>
      <a href="https://github.com/Kady1991?tab=repositories" target="_blank" rel="noopener noreferrer">
        <FaGithub size={46} className={iconStyle.base + ' ' + iconStyle.github} />
      </a>
      <RouterLink to="/portfolio">
        <SiReact size={46} className={iconStyle.base} />
      </RouterLink>
    </div>
  );
};

export default SocialIcons;
