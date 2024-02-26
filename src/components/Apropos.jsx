import React, { useEffect, useRef } from "react";
import img from "../assets/img/moi.png";
import SocialIcons from "../layouts/SocialIcons";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link as RouterLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Apropos = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    const textElement = textRef.current;

    gsap.set([textElement, imageElement], { opacity: 0 });

    gsap.fromTo(
      imageElement,
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: imageElement,
          start: "top 80%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
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
        scrollTrigger: {
          trigger: textElement,
          start: "top 80%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center lg:px-32 px-5 bg-white">
      <div className="flex items-center justify-center mt-50 image-animation lg:w-1/2" ref={imageRef}>
        <img className="rounded-full" width={470} src={img} alt="" />
      </div>
      <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-1/2 space-y text-animation m-20" ref={textRef}>
        <h1 className="text-5xl font-semibold leading-tight mt-4">
          <p>Nom: Sangare</p>
          <p>Prénom: Kady</p>
          <p>Âge: 32 ans</p>
        </h1>
        <p className="text-animation m-auto">
          Enthousiaste développeur front-end passionné par la création
          d'expériences utilisateur exceptionnelles. Prêt à relever de nouveaux
          défis et à contribuer au monde du développement web.
        </p>
        <SocialIcons />
      </div>
    </div>
  );
};

export default Apropos;
