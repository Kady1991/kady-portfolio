import React from 'react';
import {DownloadOutlined, GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

const SocialIcons = () => {
  const handleDownload = () => {
    // Logique de téléchargement du CV
  };

  return (
    <>
      <div style={{ width: "60px", height: "20px", position: "fixed", bottom: "24px", left: "24px" }}>
        <FloatButton.Group shape="cirque">
          <FloatButton icon={<DownloadOutlined />} onClick={handleDownload} size="large" />
          <FloatButton icon={<GithubOutlined />} href="https://github.com/Kady1991?tab=repositories" target="_blank" rel="noopener noreferrer" size="large" />
          <FloatButton icon={<LinkedinOutlined />} href="https://www.linkedin.com/in/kady-sangare/" target="_blank" rel="noopener noreferrer" size="large" />
          <FloatButton icon={<MailOutlined />} size="large" />
        </FloatButton.Group>
      </div>
    </>
  );
};

export default SocialIcons;
