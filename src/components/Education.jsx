import React, { useEffect, useState } from "react";
import { FaSchool } from "react-icons/fa";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layout, Steps, Button } from "antd";
import LangageIcons from "../layouts/LangageIcons";
import "../index.css";


const { Content } = Layout;
const { Step } = Steps;

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const [currentStep, setCurrentStep] = useState(0); // État de l'étape actuelle

  const animateElements = (textElement, iconElement) => {
    gsap.set([textElement, iconElement], { opacity: 0 });

    gsap.fromTo(
      iconElement,
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: Power3.easeOut,
      }
    );

    gsap.fromTo(
      textElement,
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        ease: Power3.easeOut,
      }
    );
  };

  useEffect(() => {
    const textElement = document.querySelector(".text-animation");
    const iconElement = document.querySelector(".icon-animation");

    animateElements(textElement, iconElement);

    const scrollTrigger = ScrollTrigger.create({
      trigger: textElement,
      start: "top center",
      onEnter: () => {
        animateElements(textElement, iconElement);
      },
    });

    return () => {
      // Limitez le nettoyage de ScrollTrigger lors du démontage du composant
      scrollTrigger.kill();
    };
  }, []);

  // Fonction pour avancer à l'étape suivante
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // Fonction pour revenir à l'étape précédente
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <Content
      style={{
        minHeight: "90vh", // Augmentation de la hauteur minimale
        marginRight: "50px",
        marginLeft: "350px", // Ajustement de la marge à gauche pour le menu vertical
        display: "flex",
        flexDirection: "column", // Affichage en colonne
        justifyContent: "flex-start", // Aligner le contenu en haut
        alignItems: "center", // Centrage vertical
        marginBottom: "20px",
        overflowX: "hidden",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="mt-20 mb-20">
        <LangageIcons />
      </div>

      <div className="flex flex-col justify-center lg:flex-row items-center w-3/4 px-5 bg-brunClaire h-20 m-10">
        <div className="flex flex-col items-center text-center lg:text-start lg:items-start lg:w-5/6 m-4 space-y text-animation m-auto">
          <h1 className="text-5xl font-semibold text-iconBrun leading-tight m-4">
            Etudes et Formations
            <span className="block text-hoverBouton m-4">
              {" "}
              Au Mali et en Belgique
            </span>
          </h1>
          <p className="text-texte w-full">
            J'opte pour la passionnante démarche de me former en développement
            frontend, nourrissant mon intérêt pour la création des expériences
            utilisateur exceptionnelles.
          </p>
        </div>

        <div className="flex items-center justify-center icon-animation">
          <FaSchool className="text-9xl text-cc" />
        </div>
      </div>

      <div className="w-5/6 px-5 mt-10 mb-10 mt-auto">
        <Steps direction="horizontal" current={currentStep} className="mb-8">
          <Step
            title="2011-2012"
            description="Cursus au Mali"
            className="custom-step"
          />
          <Step
            title="2012-2014"
            description="Cursus au Mali"
            className="custom-step"
          />
          <Step
            title="2017-2019"
            description="Cursus en Belgique"
            className="custom-step"
          />
          <Step
            title="2023-2024"
            description="Cursus en Belgique"
            className="custom-step"
          />
        </Steps>
        <div className="flex justify-center">
          <Button disabled={currentStep === 0} onClick={prevStep}>
            Précédent
          </Button>
          <div style={{ width: "16px" }}></div> {/* Espace entre les boutons */}
          <Button disabled={currentStep === 3} onClick={nextStep}>
            Suivant
          </Button>
        </div>
      </div>
    </Content>
  );
};

export default Education;
