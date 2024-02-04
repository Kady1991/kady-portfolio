import React from "react";
import img from "../assets/img/moi4.png";
import SocialIcons from "../layouts/SocialIcons";


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-white">
      <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-1/2 space-y">
        <h1 className="text-5xl font-semibold leading-tight mt-24">
          Je suis Kady
          <span className="block text-brightColor"> Front-end Developer</span>
        </h1>
        <p>
          J'ai opté pour la passionnante démarche de me former en développement
          frontend, nourrissant mon intérêt pour la création d'expériences
          utilisateur exceptionnelles.
          <p>
          Je suis prêt(e) à relever de nouveaux
          défis J'ai opté pour la passionnante démarche de me former en développement
          frontend, nourrissant mon intérêt pour la création d'expériences
          </p> 

        </p>
        <SocialIcons />
      </div>

      <div className="mt-20">
        <img width={570} src={img} alt="" />
      </div>
    </div>
  );
};

export default Home;
