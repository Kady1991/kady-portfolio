import React, { useEffect } from "react";
import { Card, Layout } from "antd";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LangageIcons from "../layouts/LangageIcons";
import { FaBriefcase } from "react-icons/fa"; 

const { Content } = Layout;

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const animateElements = (textElement, iconElement) => {
    if (!textElement || !iconElement) return;

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

    if (textElement && iconElement) {
      animateElements(textElement, iconElement);

      const scrollTrigger = ScrollTrigger.create({
        trigger: textElement,
        start: "top center",
        onEnter: () => {
          animateElements(textElement, iconElement);
        },
      });

      return () => {
        scrollTrigger.kill();
      };
    }
  }, []);

  return (
    <Content
      style={{
        minHeight: "90vh",
        marginRight: "50px",
        marginLeft: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
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
        <div className="flex flex-col items-center text-center lg:text-start lg:items-start lg:w-5/6 m-4 text-animation">
          <h1 className="text-5xl font-semibold text-iconBrun leading-tight m-4">
            Projets
          </h1>
          {/* <p className="text-texte w-full">
            J&apos;opte pour la passionnante démarche de me former en développement
            frontend, nourrissant mon intérêt pour la création d&apos;expériences
            utilisateur exceptionnelles.
          </p> */}
        </div>

        <div className="flex items-center justify-center icon-animation">
          <FaBriefcase className="text-9xl" style={{ color: '#3F2204', width: "200px" }} />
        </div>
      </div>

      {/* Cartes des projets */}
      <div className="flex flex-wrap justify-center mt-8">
        <Card className="m-4" style={{ width: 300 }}>
          <Card.Meta title="Projet 1" description="Description du projet 1" />
        </Card>
        <Card className="m-4" style={{ width: 300 }}>
          <Card.Meta title="Projet 2" description="Description du projet 2" />
        </Card>
        <Card className="m-4" style={{ width: 300 }}>
          <Card.Meta title="Projet 3" description="Description du projet 3" />
        </Card>
      </div>
    </Content>
  );
};

export default Project;
