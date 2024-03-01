import React from 'react';
import { IoCodeSlash } from 'react-icons/io5';

// Importe les images
import M1 from '../assets/img/M1.png';
import M2 from '../assets/img/M2.png';
import M3 from '../assets/img/M3.png';
import M4 from '../assets/img/M4.png';
import M5 from '../assets/img/M5.png';
import M6 from '../assets/img/M6.png';

const Project = () => {
  const videoUrls = [
    'https://www.youtube.com/watch?v=cucVDxvRdLA',
    'https://www.youtube.com/watch?v=cucVDxvRdLA', // Remplacez 'lien_de_video_2' par votre URL réelle
    'https://www.youtube.com/watch?v=cucVDxvRdLA', // Remplacez 'lien_de_video_3' par votre URL réelle
    'https://www.youtube.com/watch?v=cucVDxvRdLA',
    'https://www.youtube.com/watch?v=cucVDxvRdLA',
    'https://www.youtube.com/watch?v=cucVDxvRdLA',
  ];

  const openGitHub = () => {
    window.open('https://github.com/Kady1991?tab=repositories', '_blank');
  };

  const imagePaths = [M1, M2, M3, M4, M5, M6];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-experience p-4 md:p-8 w-5/6 m-auto border-solid border-2 border-indigo-600">
      <h1 className="text-3xl font-bold mb-3 text-center text-boutonBase hover:text-brightColor mt-20">
        Mes Projets
      </h1>

      <p className="mb-4 text-center text-black text-light w-5/6 mt-5">
        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
      </p>

      <div className="flex flex-col items-center mb-4 mt-5">
        <button
          className="bg-boutonBase text-white p-2 rounded-md flex items-center"
          onClick={openGitHub}
        >
          <IoCodeSlash className="text-4xl mr-5" />
          GitHub
        </button>
      </div>

      {/* Version desktop */}
      <div className="flex justify-center w-full mt-10 hidden sm:flex">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="m-10 relative flex flex-col items-center w-1/4"
          >
            <a href={videoUrls[index - 1]} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <div className="w-2/3 sm:w-full max-w-md h-auto object-cover rounded-lg  hover:bg-black relative">
                <img
                  src={imagePaths[index - 1]} 
                  alt={`Projet ${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                  <p className="text-white text-xl">Voir le projet</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Version desktop (images 4, 5, 6) */}
      <div className="flex justify-center mt-2 w-full hidden sm:flex">
        {[4, 5, 6].map((index) => (
          <div
            key={index}
            className="m-10 relative flex flex-col items-center w-1/4"
          >
            <a href={videoUrls[index - 1]} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <div className="w-2/3 sm:w-full max-w-md h-auto object-cover rounded-lg">
                <img
                  src={imagePaths[index - 1]} 
                  alt={`Projet ${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                  <p className="text-white text-xl ">Voir le projet</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Version GSM */}
      <div className="flex flex-col items-center w-full mt-10 sm:hidden">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div
            key={index}
            className="m-5 relative flex flex-col items-center w-full"
          >
            <a href={videoUrls[index - 1]} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <div className="w-full h-auto object-cover rounded-lg shadow-lg shadow-nuanceBlack relative">
                <img
                  src={imagePaths[index - 1]} 
                  alt={`Projet ${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                  <p className="text-white text-xl">Voir le projet</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Project;
