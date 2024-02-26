import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-nuanceBlack text-white p-8">
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4 text-boutonBase hover:text-brightColor">Contactez-moi</h2>
          <div className="flex items-center space-x-4">
            <a href="mailto:VotreEmail@example.com">
              <FaEnvelope size={24} className="hover:text-brightColor cursor-pointer" />
            </a>
            <p>Email</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/location">
              <FaMapMarkerAlt size={24} className="hover:text-brightColor cursor-pointer" />
            </a>
            <p>Adresse</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+1234567890">
              <FaPhone size={24} className="hover:text-brightColor cursor-pointer" />
            </a>
            <p>Téléphone</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2022 Votre Nom. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
