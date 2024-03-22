// Logo.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importez Link depuis react-router-dom
import img from '../assets/img/loGr.png';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img className="rounded-full" width={100} src={img} alt="mon logo" />
    </Link>
  );
};

export default Logo;

