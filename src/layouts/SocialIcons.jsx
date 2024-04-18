import React from 'react';
import { Button } from 'antd';
import { PhoneOutlined, MailOutlined, LinkedinOutlined, GithubOutlined, DownloadOutlined } from '@ant-design/icons';

const SocialIcons = () => {
  const handleDownload = () => {
    // Logique de téléchargement du CV
  };

  return (
    <div className="social-icons flex items-center space-x-4 justify-center m-8">
      <Button className="floting-icon" onClick={() => {}} icon={<PhoneOutlined />} size="large" /> {/* Ajustez la taille ici */}
      <Button className="floting-icon" onClick={() => {}} icon={<MailOutlined />} size="large" style={{ background: 'white' }} /> {/* Ajustez la taille ici */}
      <Button className="floting-icon" onClick={() => {}} href="https://www.linkedin.com/in/kady-sangare/" target="_blank" rel="noopener noreferrer" icon={<LinkedinOutlined />}  size="large" style={{ background: 'white' }} /> {/* Ajustez la taille ici */}
      <Button className="floting-icon" onClick={() => {}} href="https://github.com/Kady1991?tab=repositories" target="_blank" rel="noopener noreferrer" icon={<GithubOutlined />}  size="large" style={{ background: 'white' }} /> {/* Ajustez la taille ici */}
      <Button className="floting-icon" onClick={handleDownload} icon={<DownloadOutlined />} size="large" style={{ background: 'white' }} /> {/* Ajustez la taille ici */}
    </div>
  );
};

export default SocialIcons;
