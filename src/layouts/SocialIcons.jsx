import React from 'react';
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa'; // Importez les icônes pour le téléphone et l'e-mail
import { SiReact } from 'react-icons/si';
import { Link as RouterLink } from 'react-router-dom';

const SocialIcons = () => {
  const iconStyle = {
    base: 'text-boutonBase hover:text-brightColor p-2 transition-all cursor-pointer',
  };

  return (
    <div className="social-icons flex items-center space-x-4 justify-center">
      <a href="tel:+00324567890">
        <FaPhone size={46} className={iconStyle.base} />
      </a>
      <a href="mailto:sangarekady663@yahoo.fr">
        <FaEnvelope size={46} className={iconStyle.base} />
      </a>
      <a href="https://www.linkedin.com/in/kady-sangare/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={46} className={iconStyle.base} />
      </a>
      <a href="https://github.com/Kady1991?tab=repositories" target="_blank" rel="noopener noreferrer">
        <FaGithub size={46} className={iconStyle.base} />
      </a>
      <RouterLink to="/portfolio">
        <SiReact size={46} className={iconStyle.base} />
      </RouterLink>
    </div>
  );
};

export default SocialIcons;
