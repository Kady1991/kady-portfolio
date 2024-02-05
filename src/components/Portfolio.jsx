import React from 'react';
import image1 from '../assets/img/4.png';
import image2 from '../assets/img/3.png';
import image3 from '../assets/img/2.png';
import image4 from '../assets/img/1.png';

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: 'Projet 1',
            image: image1,
            text: 'Description du projet 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link: 'https://lien_vers_votre_reseau_social_1',
        },
        {
            id: 2,
            title: 'Projet 2',
            image: image2,
            text: 'Description du projet 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link: 'https://lien_vers_votre_reseau_social_2',
        },
        {
            id: 3,
            title: 'Projet 3',
            image: image3,
            text: 'Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link: 'https://lien_vers_votre_reseau_social_3',
        },
        {
            id: 4,
            title: 'Projet 4',
            image: image4,
            text: 'Description du projet 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link: 'https://lien_vers_votre_reseau_social_4',
        },
    ];

    return (
        <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
            {projects.map((project) => (
                <div key={project.id} className="relative overflow-hidden w-64 h-96">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform transform hover:scale-110" />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                        <div>
                            <h2 className="text-white text-lg font-semibold">{project.title}</h2>
                            <p className="text-white">{project.text}</p>
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            Voir sur le réseau social
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Portfolio;
