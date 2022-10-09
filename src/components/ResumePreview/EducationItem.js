import React from "react";

const EducationItem = ({ educationItem }) => {
  return (
    <div className="education-item">
      <div className="duration">
        {educationItem.startDate} - {educationItem.endDate}
      </div>
      <div className="info">
        <h3>
          {educationItem.school}, {educationItem.location}
        </h3>
        <p>Degree: {educationItem.degree}</p>
        <p>Major: {educationItem.major}</p>
      </div>
    </div>
  );
};

export default EducationItem;