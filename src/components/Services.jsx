import React, { useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layout } from "antd";
import LangageIcons from "../layouts/LangageIcons";
import { GiSkills } from "react-icons/gi";
import { Progress } from "antd";


// Import des icônes de compétences
import {
  SiJavascript,
  SiHtml5,
  SiWordpress,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiGithub,
} from "react-icons/si";
import { FaPhp } from "react-icons/fa";

const { Content } = Layout;

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  // Fonction pour animer les éléments
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

  // Effet de défilement
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
      // Nettoyage de ScrollTrigger lors du démontage du composant
      scrollTrigger.kill();
    };
  }, []);

  return (
    <Content
      style={{
        minHeight: "70vh",
        marginRight: "50px",
        marginLeft: "350px", // Ajustement de la marge à gauche pour le menu vertical
        display: "flex",
        flexDirection: "column", // Affichage en colonne
        justifyContent: "center", // Centrage horizontal
        alignItems: "center", // Centrage vertical
        marginBottom: "20px",
        overflowX: "hidden",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="mt-10 mb-10">
        <LangageIcons className="mt-10 mb-10" />
      </div>

      <div className="flex flex-col justify-center lg:flex-row items-center w-3/4 px-5 bg-brunClaire h-20 m-20">
        <div className="flex flex-col items-center text-center lg:text-start lg:items-start lg:w-5/6 m-4 space-y text-animation m-auto">
          <h1 className="text-5xl font-semibold text-iconBrun leading-tight m-4">
          Compétences techniques
            <span className="block text-hoverBouton m-4">
              {" "}
              
            </span>
          </h1>
          <p className="text-texte w-full ">
            J'opte pour la passionnante démarche de me former en développement
            frontend, nourrissant mon intérêt pour la création des expériences
            utilisateur exceptionnelles.en développement frontend, nourrissant
            
          </p>
        </div>

        <div className="flex items-center justify-center icon-animation">
          <GiSkills
            className="text-9xl text-cc"
            style={{ color: "#3F2204", width: "200px" }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 w-5/6 mt-20 m-20">
  {/* Compétence JavaScript */}
  <div className="flex items-center text-iconBrun">
    <SiJavascript size={30} />
    <span className="m-5"> JavaScript </span>
    <Progress percent={50} showInfo={false} strokeColor="#964B00" />
    <span className="m-5 text-brun">50%</span>
  </div>

  {/* Compétence HTML/CSS */}
  <div className="flex items-center text-iconBrun">
    <SiHtml5 size={30} />
    <span className="m-5"> HTML/CSS </span>
    <Progress percent={80} showInfo={false} strokeColor="#964B00" />
    <span className="m-5 text-brun">80%</span>
  </div>

  {/* Compétence WordPress */}
  <div className="flex items-center text-iconBrun">
    <SiWordpress size={30} />
    <span className="m-5"> WordPress </span>
    <Progress percent={60} showInfo={false} strokeColor="#964B00" />
    <span className="m-5 text-brun">60%</span>
  </div>

  {/* Compétence React */}
  <div className="flex items-center text-iconBrun">
    <SiReact size={30} />
    <span className="m-5"> React </span>
    <Progress percent={50} showInfo={false} strokeColor="#964B00" />
    <span className="m-5 text-brun">50%</span>
  </div>

  {/* Compétence Tailwind CSS */}
  <div className="flex items-center text-iconBrun">
    <SiTailwindcss size={30} />
    <span className="m-5"> Tailwind/CSS </span>
    <Progress percent={60} showInfo={false} strokeColor="#964B00" />
    <span className="m-5 text-brun ">60%</span>
  </div>

  {/* Compétence Bootstrap */}
  <div className="flex items-center text-iconBrun">
    <SiBootstrap size={30} />
    <span className="m-5"> Bootstrap </span>
    <Progress percent={60} showInfo={false} strokeColor="#964B00" />
    <span className="m-5 text-brun">60%</span>
  </div>

  {/* Compétence PHP */}
  <div className="flex items-center text-iconBrun">
    <FaPhp size={30} />
    <span className="m-5"> PHP </span>
    <Progress percent={50} showInfo={false} strokeColor="#964B00" />
    <span className="m-5 text-brun">50%</span>
  </div>

  {/* Compétence GitHub */}
  <div className="flex items-center text-iconBrun">
    <SiGithub size={30} />
    <span className="m-5"> GitHub </span>
    <Progress percent={65} showInfo={false} strokeColor="#964B00" />
    <span className="m-5 text-brun">65%</span>
  </div>
</div>


    </Content>
  );
};

export default Services;
