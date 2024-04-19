import React, { useState } from "react";
import { Timeline, Button } from "antd";
import SocialIcons from "../layouts/FloatingIcons";
import img from "../assets/img/moi.png";

const Apropos = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const timelineSteps = [
    { year: "2012 - 2014", text: "Texte 1" },
    { year: "2015", text: "Texte 2" },
    { year: "2017 - 2019", text: "Texte 3" },
    { year: "2020 - 2021", text: "Texte 4" },
    { year: "2023 - 2024", text: "Texte 5" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-brunClaire m-auto">
      <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-ful m-20">
        <div className="flex justify-center items-center mb-4">
          <img className="rounded-full" width={450} src={img} alt="" />
        </div>
        <h1 className="text-5xl font-semibold text-iconBrun leading-tight">
          Je suis Kady
          <span className="block text-hoverBouton"> Front-end Developer</span>
        </h1>
        <p className="m-auto text-texte">
          J'opte pour la passionnante démarche de me former en développement
          frontend, nourrissant mon intérêt pour la création des expériences
          utilisateur exceptionnelles.en développement frontend, nourrissant mon
          intérêt pour la création des expériences utilisateur exceptionnelles.
        </p>
      </div>
    </div>
  );
};

export default Apropos;
