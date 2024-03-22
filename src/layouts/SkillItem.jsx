import React from 'react';
import PropTypes from 'prop-types';

const SkillItem = ({ icon, label, percentage }) => {
  return (
    <div className="flex items-center w-5/6">
      <div className="m-auto">{icon}</div>
      <div className="w-3/4">
        <h3 className="text-lg ">{label}</h3>
        <div className="w-full bg-white h-3 rounded-md ">
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
