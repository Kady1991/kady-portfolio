import React from 'react';
import { DownloadOutlined, GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

const SocialIcons = () => {
  const handleDownload = () => {
    // Logique de téléchargement du CV
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <FloatButton icon={<DownloadOutlined />} onClick={handleDownload} size="large" style={{ marginRight: "16px" }} />
      <div style={{ width: "16px" }}></div> {/* Marge entre les icônes */}
      <FloatButton icon={<GithubOutlined />} href="https://github.com/Kady1991?tab=repositories" target="_blank" rel="noopener noreferrer" size="large" style={{ marginRight: "16px" }} />
      <div style={{ width: "16px" }}></div> {/* Marge entre les icônes */}
      <FloatButton icon={<LinkedinOutlined />} href="https://www.linkedin.com/in/kady-sangare/" target="_blank" rel="noopener noreferrer" size="large" style={{ marginRight: "16px" }} />
      <div style={{ width: "16px" }}></div> {/* Marge entre les icônes */}
      <FloatButton icon={<MailOutlined />} size="large" />
    </div>
  );
};

export default SocialIcons;
