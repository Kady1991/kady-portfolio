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
        <div className="flex flex-col items-center justify-center h-screen bg-brunClaire">
            <div className="text-center w-3/4">
                <h1 className="text-3xl font-bold text-iconBrun">Skills</h1>
                <p className="w-5/6 m-auto text-texte">
                    Le composant Skills est une représentation visuelle de mes compétences en développement web. Chaque compétence,
                    telles que HTML/CSS, JavaScript, WordPress, React, Tailwind CSS, Bootstrap et GitHub, est illustrée par une
                    icône reconnaissable. Les barres de progression colorées indiquent le niveau de maîtrise de chaque compétence,
                    offrant ainsi une vue rapide et informative de mes compétences techniques. Cette section vise à donner un
                    aperçu clair de mon profil professionnel et de mes capacités dans le domaine du développement web.
                </p>
            </div>
            <div className="w-5/6 m-20">
                <div className="grid grid-cols-2 gap-3 mt-10 m-auto">
                    <SkillItem icon={<SiJavascript size={40} className="text-iconBrun" />} label="JavaScript" percentage={50} />
                    <SkillItem icon={<SiHtml5 size={40} className="text-iconBrun" />} label="HTML/CSS" percentage={80} />
                    <SkillItem icon={<SiWordpress size={40} className="text-iconBrun" />} label="WordPress" percentage={60} />
                    <SkillItem icon={<SiReact size={40} className="text-iconBrun" />} label="React" percentage={50} />
                    <SkillItem icon={<SiTailwindcss size={40} className="text-iconBrun" />} label="Tailwind CSS" percentage={60} />
                    <SkillItem icon={<SiBootstrap size={40} className="text-iconBrun" />} label="Bootstrap" percentage={60} />
                    <SkillItem icon={<FaPhp size={40} className="text-iconBrun" />} label="PHP" percentage={50} />
                    <SkillItem icon={<SiGithub size={40} className="text-iconBrun" />} label="GitHub" percentage={65} />
                </div>
            </div>
        </div>
    );
};

export default Skills;
