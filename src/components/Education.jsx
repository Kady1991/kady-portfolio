import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Education = () => {
    const Accordion = ({ title, content }) => {
        const [isOpen, setIsOpen] = useState(false);

        const toggleAccordion = () => {
            setIsOpen(!isOpen);
        };

        return (
            <div className="accordion mb-4">
                <div
                    className="accordion-title cursor-pointer py-2 px-4 bg-boutonBase text-white text-center hover:bg-brightColor"
                    onClick={toggleAccordion}
                >
                    {title}
                </div>
                {isOpen && (
                    <div className="accordion-content py-2 px-4 bg-experience">
                        {content}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen mt-8">
            <div className="p-6 text-center">
                <h1 className="text-3xl font-bold mb-4 m-auto font-ligth mb-8 text-boutonBase hover:text-brightColor text-center md:w-1/2">
                    Éducation
                </h1>
                <p className="w-11/12 md:w-5/6 m-auto text-black bold-light">
                    Nous et nos partenaires stockons et/ou accédons à des informations sur votre appareil, telles que des cookies et traitons des données personnelles,
                    telles que des identifiants uniques et des informations standard envoyées par un appareil pour des publicités et du contenu personnalisés,
                    des mesures d'audience et des informations sur l'audience, ainsi que pour développer et améliorer nos produits.
                    Avec votre autorisation, nous et nos partenaires pouvons utiliser des données de géolocalisation précises et identifier un scan de dispositif.
                </p>
            </div>
            <div className="flex flex-col md:flex-row mx-4 md:mx-auto mt-8 w-11/12 md:w-5/6 h-full bg-experience shadow-nuanceBlack shadow-md rounded-md">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center m-4 bg-opacity-20 ">
                    <h2 className="text-3xl font-bold mb-4 text-boutonBase hover:text-brightColor">Cursus au Mali</h2>
                    <Accordion title="2011-2012" content="et/ou accéder à des informations sur un appareil, telles que des cookies et traiter des données personnelles, 
                        telles que des identifiants uniques" />
                    <Accordion title="2012-2014" content="et/ou accéder à des informations sur un appareil, telles que des cookies et traiter des données personnelles, 
                        telles que des identifiants uniques" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center m-4 ">
                    <h2 className="text-3xl font-bold mb-4 text-boutonBase hover:text-brightColor">Cursus en Belgique</h2>
                    <Accordion title="2017-2019" content="et/ou accéder à des informations sur un appareil, telles que des cookies et traiter des données personnelles, 
                        telles que des identifiants uniques" />
                    <Accordion title="2023-2024" content="et/ou accéder à des informations sur un appareil, telles que des cookies et traiter des données personnelles, 
                        telles que des identifiants uniques" />
                </div>
            </div>
            <div className="mt-4">
                <RouterLink to="/" className="text-brightColor hover:underline">
                    Aller à la page d'accueil
                </RouterLink>
            </div>
        </div>
    );
};

export default Education;
