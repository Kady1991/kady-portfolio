// Logo.jsx
import React from "react";
import logoImage from "../assets/img/loGr.png"; // Importez l'image que vous souhaitez utiliser

const LogoComponent = () => {
  return (
    <div>
      <img src={logoImage} alt="Logo" style={{ width: "100px" }} /> {/* Ajustez la taille du logo ici */}
    </div>
  );
};

export default LogoComponent;
