import React, { useEffect } from "react";
import img from "../assets/img/moi.png";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layout } from "antd";

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
        minHeight: "80vh",
        marginRight: "50px",
        marginLeft: "250px", // Ajustement de la marge à gauche pour le menu vertical
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "20px",
        overflowX: "hidden",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ width: "70%" }}>
        <div className="container" style={{ display: "flex", alignItems: "center" }}>
          <div className="image-animation">
            <img className="rounded-full" width={1300} src={img} alt="" style={{ marginRight: "40px" }} />
          </div>
          <div className="text-animation m-20">
              
            <h1 className="text-5xl font-semibold text-white leading-tight bg-iconBrun h:20 w:5/6 opacity:1">
              Je suis Kady
            </h1>
              <span className="block text-hoverBouton m-4"> Front-end Developer</span>
            <p className="text-texte">
              J'opte pour la passionnante démarche de me former en développement
              frontend, nourrissant mon intérêt pour la création des expériences
              utilisateur exceptionnelles.en développement
              frontend, nourrissant mon intérêt pour la création des expériences
              utilisateur exceptionnelles.
            </p>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Home;
