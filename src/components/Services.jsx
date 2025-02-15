import React, { useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layout, Progress } from "antd";
import LangageIcons from "../layouts/LangageIcons";
import { GiSkills } from "react-icons/gi";

// Import des icônes de compétences
import {
  SiJavascript, SiHtml5, SiWordpress, SiReact,
  SiTailwindcss, SiBootstrap, SiGithub,
} from "react-icons/si";
import { FaPhp } from "react-icons/fa";

const { Content } = Layout;

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  // ✅ Fonction pour animer les éléments
  const animateElements = () => {
    const textElement = document.querySelector(".text-animation");
    const imageElement = document.querySelector(".icon-animation");

    if (!textElement || !imageElement) return;

    gsap.set([textElement, imageElement], { opacity: 0 });

    gsap.fromTo(
      imageElement,
      { y: -200, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: Power3.easeOut, delay: 0.5 }
    );

    gsap.fromTo(
      textElement,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 3, ease: Power3.easeOut, delay: 0.5 }
    );
  };

  // ✅ Effet d'animation au chargement et au scroll
  useEffect(() => {
    animateElements();

    const scrollTrigger = ScrollTrigger.create({
      trigger: ".text-animation",
      start: "top center",
      onEnter: animateElements,
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  // ✅ Supprimer la barre de scroll horizontal et vertical
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <Content
      style={{
        minHeight: "100vh", // ✅ S'assurer que tout tient dans l'écran
        maxWidth: "100vw", // ✅ Empêcher le débordement horizontal
        marginRight: "50px",
        marginLeft: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden", // ✅ Supprimer tout scroll
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="mt-20">
        <LangageIcons />
      </div>

      <div className="flex flex-col justify-center lg:flex-row items-center w-3/4 px-5 bg-brunClaire h-20 mt-10 mb-10">
        <div className="flex flex-col items-center text-center lg:text-start lg:items-start lg:w-5/6 m-4 text-animation mt-30  h-20">
          <h1 className="text-5xl font-semibold text-iconBrun leading-tight ">
            Compétences techniques
          </h1>
          
        </div>

        <div className="flex items-center justify-center icon-animation">
          <GiSkills className="text-9xl" style={{ color: "#3F2204", width: "200px" }} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 w-5/6 mt-10 mt-20">
        {/* Liste des compétences avec Progress Bar */}
        {[
          { icon: <SiJavascript size={30} />, name: "JavaScript", percent: 50 },
          { icon: <SiHtml5 size={30} />, name: "HTML/CSS", percent: 80 },
          { icon: <SiWordpress size={30} />, name: "WordPress", percent: 60 },
          { icon: <SiReact size={30} />, name: "React", percent: 50 },
          { icon: <SiTailwindcss size={30} />, name: "Tailwind CSS", percent: 60 },
          { icon: <SiBootstrap size={30} />, name: "Bootstrap", percent: 60 },
          { icon: <FaPhp size={30} />, name: "PHP", percent: 50 },
          { icon: <SiGithub size={30} />, name: "GitHub", percent: 65 },
        ].map((skill, index) => (
          <div key={index} className="flex items-center text-iconBrun">
            {skill.icon}
            <span className="m-5"> {skill.name} </span>
            <Progress percent={skill.percent} showInfo={false} strokeColor="#964B00" />
            <span className="m-5 text-brun">{skill.percent}%</span>
          </div>
        ))}
      </div>
    </Content>
  );
};

export default Services;
