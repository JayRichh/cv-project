import React from "react";

const ExperienceItem = ({ experienceItem }) => {
  return (
    <div className="experience-item">
      <div className="duration">
        {experienceItem.startDate} - {experienceItem.endDate}
      </div>
      <div className="info">
        <h3>{experienceItem.position}</h3>
        <div>
          {experienceItem.company}, {experienceItem.location}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;