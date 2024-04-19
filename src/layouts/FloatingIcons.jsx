import React from 'react';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FloatingIcons = () => {
    return (
        <div style={{ display: 'flex' }}>
            <a href="#" className="icon-link">
                <FaDownload />
            </a>
            <a href="#" className="icon-link">
                <FaGithub />
            </a>
            <a href="#" className="icon-link">
                <FaLinkedin />
            </a>
            <a href="#" className="icon-link">
                <FaEnvelope />
            </a>
        </div>
    );
};

export default FloatingIcons;
