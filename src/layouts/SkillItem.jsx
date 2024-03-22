import React from 'react';
import PropTypes from 'prop-types';

const SkillItem = ({ icon, label, percentage }) => {
  return (
    <div className="flex items-center">
      <div className="w-1/4">{icon}</div>
      <div className="w-3/4">
        <h3 className="text-lg ">{label}</h3>
        <div className="w-full bg-barrekills h-3 rounded-md mt-1">
          <div
            className="bg-nuancebarre h-full rounded-md"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

SkillItem.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default SkillItem;
