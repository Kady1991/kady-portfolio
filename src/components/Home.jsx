import React, { useEffect } from "react";
import img from "../assets/img/moi.png";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <div className="min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-brunClaire m-auto ">
      <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-2/6 space-y text-animation m-20  m-auto">
        <h1 className="text-5xl font-semibold text-iconBrun leading-tight mt-24">
          Je suis Kady
          <span className="block text-hoverBouton"> Front-end Developer</span>
        </h1>
        <p className="m-auto text-texte">
          J'opte pour la passionnante démarche de me former en développement
          frontend, nourrissant mon intérêt pour la création des expériences
          utilisateur exceptionnelles.en développement
          frontend, nourrissant mon intérêt pour la création des expériences
          utilisateur exceptionnelles.
        </p>
      
      </div>

      <div className="flex items-center justify-center mt-50 image-animation">
        <img className="rounded-full" width={470} src={img} alt="" />
      </div>
    </div>
  );
};

export default Home;
