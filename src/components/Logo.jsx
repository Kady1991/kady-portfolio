import React from "react";
import { Link } from "react-router-dom"; // Assurez-vous d'importer Link depuis react-router-dom
import logoImage from "../assets/img/kady.jpeg"; // Importez l'image que vous souhaitez utiliser

const LogoComponent = () => {
  return (
    <div>
      <Link to="/" style={{ textDecoration: 'none' }}> {/* Redirection vers la page d'accueil au clic */}
        <img src={logoImage} alt="Logo" style={{ width: "150px" }} /> {/* Ajustez la taille du logo ici */}
      </Link>
    </div>
  );
};

export default LogoComponent;
