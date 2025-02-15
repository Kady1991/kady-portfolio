import React, { useEffect } from "react";
import img from "../assets/img/moi.png";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layout } from "antd";
import LangageIcons from '../layouts/LangageIcons';

const { Content } = Layout;

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const animateElements = (textElement, imageElement) => {
    gsap.set([textElement, imageElement], { opacity: 0 });

    gsap.fromTo(
      imageElement,
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
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        ease: Power3.easeOut,
      }
    );
  };

  useEffect(() => {
    const textElement = document.querySelector(".text-animation");
    const imageElement = document.querySelector(".image-animation");

    animateElements(textElement, imageElement);

    const scrollTrigger = ScrollTrigger.create({
      trigger: textElement,
      start: "top center",
      onEnter: () => {
        animateElements(textElement, imageElement);
      },
    });

    return () => {
      // Limitez le nettoyage de ScrollTrigger lors du démontage du composant
      scrollTrigger.kill();
    };
  }, []);

  return (
    <Content
      style={{
        minHeight: "80vh", // Augmentation de la hauteur minimale
        marginRight: "50px",
        marginLeft: "350px", // Ajustement de la marge à gauche pour le menu vertical
        display: "flex",
        flexDirection: "column", // Affichage en colonne
        justifyContent: "flex-start", // Aligner le contenu en haut
        alignItems: "center", // Centrage vertical
        marginTop: "50px",
        overflowX: "hidden",
        position: "relative",
        zIndex: 1,
      }}
      
      >
      <div className="mt-20">
        <LangageIcons/>
      </div>

      <div className="flex flex-col justify-center lg:flex-row items-center w-3/4 px-5 bg-brunClaire h-20 mb-20 mt-40">
  <div className="flex flex-col items-center text-center lg:text-start lg:items-start lg:w-5/6 m-4 space-y text-animation m-auto">
    <h1 className="text-5xl font-semibold text-iconBrun leading-tight m-4">
      Kady SANGARE
      <span className="block text-hoverBouton m-4"> Front-end Developer Junior</span>
    </h1>
    <p className="text-texte w-full">
      J&apos;opte pour la passionnante démarche de me former en développement
      frontend, nourrissant mon intérêt pour la création d&apos;expériences
      utilisateur exceptionnelles.
    </p>
  </div>

  <div className="flex items-center justify-center mt-20 lg:mt-0 image-animation">
    <img className="rounded-full" width={450} src={img} alt="Kady SANGARE" />
  </div>
</div>

    </Content>
  );
};

export default Home;
