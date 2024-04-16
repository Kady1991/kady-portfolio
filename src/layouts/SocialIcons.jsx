import React from 'react';
import { IconButton } from '@mui/material';
import { Phone, Mail, LinkedIn, GitHub, GetApp } from '@mui/icons-material';

const SocialIcons = () => {
  const handleDownload = () => {
    // Logique de téléchargement du CV
  };

  return (
    <div className="social-icons flex items-center space-x-4 justify-center m-8">
      <IconButton className="floting-icon" onClick={() => {}}>
        <Phone fontSize="large" /> {/* Ajustez la taille ici */}
      </IconButton>
      <IconButton className="floting-icon" onClick={() => {}}>
        <Mail fontSize="large" /> {/* Ajustez la taille ici */}
      </IconButton>
      <IconButton className="floting-icon" onClick={() => {}} href="https://www.linkedin.com/in/kady-sangare/" target="_blank" rel="noopener noreferrer">
        <LinkedIn fontSize="large" /> {/* Ajustez la taille ici */}
      </IconButton>
      <IconButton className="floting-icon" onClick={() => {}} href="https://github.com/Kady1991?tab=repositories" target="_blank" rel="noopener noreferrer">
        <GitHub fontSize="large" /> {/* Ajustez la taille ici */}
      </IconButton>
      <IconButton className="floting-icon" onClick={handleDownload}>
        <GetApp fontSize="large" /> {/* Ajustez la taille ici */}
      </IconButton>
    </div>
  );
};

export default SocialIcons; // Assurez-vous que cette ligne est présente
