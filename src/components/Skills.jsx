import React, { useEffect } from 'react';
import { SiHtml5, SiJavascript, SiWordpress, SiReact, SiTailwindcss, SiBootstrap, SiGithub } from 'react-icons/si';
import { FaPhp } from 'react-icons/fa';
import SkillItem from "../layouts/SkillItem";
import gsap from "gsap"; // Import de GreenSock pour les animations

// Fonction d'animation des compétences
const animateSkills = () => {
    // Animation des compétences ici, par exemple :
    gsap.from(".skill-item", { opacity: 0, y: 50, stagger: 0.2 });
};

const Skills = () => {
    useEffect(() => {
        animateSkills(); // Appel de la fonction d'animation lors du montage du composant
    }, []);

    return (
        <div className="flex bg-brunClaire h-screen py-10">

            <div className="flex flex-col items-center justify-center w-1/5"> {/* Menu vertical */}
                {/* Votre menu ici */}
            </div>
            <div className="flex flex-col items-center justify-center w-5/6"> {/* Conteneur du composant */}
                <div className="text-center w-5/6 mb-20">
                    <h1 className="text-3xl font-bold text-iconBrun mb-10">Services</h1>
                    <p className="w-5/6 m-auto text-texte">
                        Le composant Skills est une représentation visuelle de mes compétences en développement web. Chaque compétence,
                        telles que HTML/CSS, JavaScript, WordPress, React, Tailwind CSS, Bootstrap et GitHub, est illustrée par une
                        icône reconnaissable. Les barres de progression colorées indiquent le niveau de maîtrise de chaque compétence,
                        offrant ainsi une vue rapide et informative de mes compétences techniques. 
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-3 w-5/6"> {/* Ajustement de la largeur de la grille */}
                    <SkillItem icon={<SiJavascript size={30} className="text-iconBrun" />} label="JavaScript" percentage={50} barWidth={64} /> {/* Ajustement de la largeur de la barre de progression */}
                    <SkillItem icon={<SiHtml5 size={30} className="text-iconBrun" />} label="HTML/CSS" percentage={80} barWidth={96} /> {/* Ajustement de la largeur de la barre de progression */}
                    <SkillItem icon={<SiWordpress size={30} className="text-iconBrun" />} label="WordPress" percentage={60} barWidth={76} /> {/* Ajustement de la largeur de la barre de progression */}
                    <SkillItem icon={<SiReact size={30} className="text-iconBrun" />} label="React" percentage={50} barWidth={64} /> {/* Ajustement de la largeur de la barre de progression */}
                    <SkillItem icon={<SiTailwindcss size={30} className="text-iconBrun" />} label="Tailwind CSS" percentage={60} barWidth={76} /> {/* Ajustement de la largeur de la barre de progression */}
                    <SkillItem icon={<SiBootstrap size={30} className="text-iconBrun" />} label="Bootstrap" percentage={60} barWidth={76} /> {/* Ajustement de la largeur de la barre de progression */}
                    <SkillItem icon={<FaPhp size={30} className="text-iconBrun" />} label="PHP" percentage={50} barWidth={64} /> {/* Ajustement de la largeur de la barre de progression */}
                    <SkillItem icon={<SiGithub size={30} className="text-iconBrun" />} label="GitHub" percentage={65} barWidth={80} /> {/* Ajustement de la largeur de la barre de progression */}
                </div>
            </div>
        </div>
    );
};

export default Skills;
