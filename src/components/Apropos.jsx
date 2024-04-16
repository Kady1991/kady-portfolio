import React, { useState } from 'react';
import { Timeline, Button } from 'antd';
import { SocialIcons } from '../layouts/SocialIcons'; // Assurez-vous d'importer correctement vos icônes sociales

const Apropos = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const timelineSteps = [
    { year: '2012 - 2014', text: 'Texte 1' },
    { year: '2015', text: 'Texte 2' },
    { year: '2017 - 2019', text: 'Texte 3' },
    { year: '2020 - 2021', text: 'Texte 4' },
    { year: '2023 - 2024', text: 'Texte 5' }
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center lg:px-32 px-5 bg-white">
      <div className="flex items-center justify-center mt-50 image-animation lg:w-1/2" ref={imageRef}>
      <div className="flex items-center justify-center mt-50 image-animation">
        <img className="rounded-full" width={470} src={img} alt="" />
      </div>
      </div>
      <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-1/2 space-y text-animation m-20" ref={textRef}>
        <Timeline mode="alternate" current={currentStep}>
          {timelineSteps.map((step, index) => (
            <Timeline.Item key={index} label={step.year}>
              {step.text}
            </Timeline.Item>
          ))}
        </Timeline>
        <Button onClick={() => setCurrentStep(currentStep + 1)}>Avancer</Button>
      </div>
    </div>
  );
};

<SocialIcons />
export default Apropos;
