import React from 'react';
import { IoCodeSlash } from 'react-icons/io5';
import { Link as RouterLink } from 'react-router-dom';

// Importe les images
import img1 from '../assets/img/im1.png';
import img2 from '../assets/img/im2.png';
import img3 from '../assets/img/im3.png';
import img4 from '../assets/img/im4.png';
import img5 from '../assets/img/im5.png';
import img6 from '../assets/img/im6.png';

const Project = () => {
  const videoUrls = [
    // '',
    // '/src/assets/videos/LAVIDEO2.mp4',
    // '/src/assets/videos/LAVIDEO3.mp4',
    // '/src/assets/videos/LAVIDEO4.mp4',
    // '/src/assets/videos/LAVIDEO5.mp4',
    // '/src/assets/videos/LAVIDEO6.mp4',
  ];

  const openGitHub = () => {
    window.open('https://github.com/Kady1991?tab=repositories', '_blank');
  };

  // Tableau des chemins d'accès des images
  const imagePaths = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-experience p-4 md:p-8 w-90%">
      <h1 className="text-3xl font-bold mb-3 text-center text-boutonBase hover:text-brightColor">
        Mes Projets
      </h1>

      <p className="mb-4 text-center text-black text-light w-5/6">
        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
      </p>

      <div className="flex flex-col items-center mb-4">
        <button
          className="bg-boutonBase text-white p-2 rounded-md flex items-center"
          onClick={openGitHub}
        >
          <IoCodeSlash className="text-4xl mr-2" />
          GitHub
        </button>
      </div>

      <div className="flex justify-center w-full">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="m-2 relative flex flex-col items-center w-1/3"
          >
            <a href={videoUrls[index - 1]} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <img
                src={imagePaths[index - 1]} 
                alt={`Projet ${index}`}
                className="w-2/3 sm:w-full max-w-md h-auto object-cover rounded-lg shadow-lg shadow-nuanceBlack m-1"
              />
            </a>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-2 w-full">
        {[4, 5, 6].map((index) => (
          <div
            key={index}
            className="m-2 relative flex flex-col items-center w-1/3"
          >
            <a href={videoUrls[index - 1]} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <img
                src={imagePaths[index - 1]}
                alt={`Projet ${index}`}
                className="w-2/3 sm:w-full max-w-md h-auto object-cover rounded-lg shadow-lg shadow-nuanceBlack m-1"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
