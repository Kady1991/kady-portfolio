import React from 'react';
import SocialIcons from '../layouts/SocialIcons';
import Logo from '../components/Logo';

const Footer = () => {
  return (
    <footer className="flex-row ">

      <div className=" w-5/6 m-auto flex items-center space-x-4 justify-between ">
        <SocialIcons />
        <Logo />
        <p>&copy; 2024 Kady Sangaré. Tous droits réservés.</p>
      </div>

    </footer>
  );
};

export default Footer;

