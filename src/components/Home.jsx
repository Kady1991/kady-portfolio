import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link depuis React Router
import home3 from "../assets/img/home3.jpg"; // Assurez-vous que le chemin d'importation est correct

const Home = () => {
  return (
    <div className="relative h-screen">
      {/* Image de fond avec filtre */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${home3})`, filter: 'brightness(50%)' }} />

      {/* Contenu (texte et bouton) positionné au centre */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Conteneur pour le texte et le bouton */}
        <div className="bg-transparent p-8 rounded-md">
          <h1 className="text-5xl font-bold text-white mb-4 ">Bienvenue sur mon Portfolio </h1>
          <p className=" text-5xl text-white mb-8 ">Je suis Kady</p>
          <p className=" text-3xl text-white mb-8">Frontend Developpeuse Junior</p>
          {/* Utiliser Link pour créer un lien vers la page "À propos" */}
          <Link to="/apropos">
            <button className="bg-cc hover:bg-dd text-white font-bold py-2 px-12 rounded">
              À propos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
