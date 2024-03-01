import React from 'react';
import { IoCodeSlash } from 'react-icons/io5';

// Importe les images
import img1 from '../assets/img/im1.png';
import img2 from '../assets/img/im2.png';
import img3 from '../assets/img/im3.png';
import img4 from '../assets/img/im4.png';
import img5 from '../assets/img/im5.png';
import img6 from '../assets/img/im6.png';

const Project = () => {
  const videoUrls = [];
  const openGitHub = () => {
    window.open('https://github.com/Kady1991?tab=repositories', '_blank');
  };

  const imagePaths = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-experience p-4 md:p-8 w-5/6 m-auto ">
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
            className="m-2 relative flex flex-col items-center w-1/3"
          >
            <a href={videoUrls[index - 1]} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <img
                src={imagePaths[index - 1]} 
                alt={`Projet ${index}`}
                className="w-2/3 sm:w-full max-w-md h-auto object-cover rounded-lg shadow-lg shadow-nuanceBlack "
              />
            </a>
          </div>
        ))}
      </div>

      {/* Version GSM */}
      <div className="flex flex-col items-center w-full mt-10 sm:hidden">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="m-2 relative flex flex-col items-center w-full"
          >
            <a href={videoUrls[index - 1]} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <img
                src={imagePaths[index - 1]} 
                alt={`Projet ${index}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg shadow-nuanceBlack "
              />
            </a>
          </div>
        ))}
      </div>

      {/* Version desktop (images 4, 5, 6) */}
      <div className="flex justify-center mt-2 w-full hidden sm:flex">
        {[4, 5, 6].map((index) => (
          <div
            key={index}
            className="m-2 relative flex flex-col items-center w-1/3"
          >
            <a href={videoUrls[index - 1]} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <img
                src={imagePaths[index - 1]}
                alt={`Projet ${index}`}
                className="w-2/3 sm:w-full max-w-md h-auto object-cover rounded-lg shadow-lg shadow-nuanceBlack "
              />
            </a>
          </div>
        ))}
      </div>

      {/* Version GSM (images 4, 5, 6) */}
      <div className="flex flex-col items-center w-full mt-2 sm:hidden">
        {[4, 5, 6].map((index) => (
          <div
            key={index}
            className="m-2 relative flex flex-col items-center w-full"
          >
            <a href={videoUrls[index - 1]} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <img
                src={imagePaths[index - 1]}
                alt={`Projet ${index}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg shadow-nuanceBlack "
              />
            </a>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Project;
