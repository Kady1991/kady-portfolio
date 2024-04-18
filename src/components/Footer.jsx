import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-center aligne-center"> {/* Utilisation de la classe 'justify-center' pour centrer horizontalement */}
      <div className="w-2/6 m-auto flex items-center space-x-4 justify-center mr-100">
        <p>&copy; 2024 Kady Sangaré. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
