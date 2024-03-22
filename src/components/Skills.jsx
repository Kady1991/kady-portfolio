import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiWordpress, SiReact, SiTailwindcss, SiBootstrap, SiGithub } from 'react-icons/si';
import { FaPhp } from 'react-icons/fa';
import SkillItem from "../layouts/SkillItem";

const Skills = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-brunClaire ">
            <div className="text-center w-3/4">
                <h1 className="text-3xl font-bold mb-8 text-iconBrun">Skills</h1>
                <p className="w-5/6 m-auto text-texte">
                    Le composant Skills est une représentation visuelle de mes compétences en développement web. Chaque compétence,
                    telles que HTML, CSS, JavaScript, WordPress, React, Tailwind CSS, Bootstrap et GitHub, est illustrée par une
                    icône reconnaissable. Les barres de progression colorées indiquent le niveau de maîtrise de chaque compétence,
                    offrant ainsi une vue rapide et informative de mes compétences techniques. Cette section vise à donner un
                    aperçu clair de mon profil professionnel et de mes capacités dans le domaine du développement web.
                </p>
            </div>
            <div className="w-5/6">
                <div className="grid grid-cols-3 gap-8 mt-20 mx-0">
                    <SkillItem icon={<SiHtml5 size={50} className="text-iconBrun" />} label="HTML" percentage={80} />
                    <SkillItem icon={<SiCss3 size={50} className="text-iconBrun" />} label="CSS" percentage={75} />
                    <SkillItem icon={<SiJavascript size={50} className="text-iconBrun" />} label="JavaScript" percentage={70} />
                    <SkillItem icon={<SiWordpress size={50} className="text-iconBrun" />} label="WordPress" percentage={65} />
                    <SkillItem icon={<SiReact size={50} className="text-iconBrun" />} label="React" percentage={85} />
                    <SkillItem icon={<SiTailwindcss size={50} className="text-iconBrun" />} label="Tailwind CSS" percentage={60} />
                    <SkillItem icon={<SiBootstrap size={50} className="text-iconBrun" />} label="Bootstrap" percentage={70} />
                    <SkillItem icon={<FaPhp size={50} className="text-iconBrun" />} label="PHP" percentage={60} />
                    <SkillItem icon={<SiGithub size={50} className="text-iconBrun" />} label="GitHub" percentage={75} />
                </div>
            </div>
        </div>
    );
};

export default Skills;
