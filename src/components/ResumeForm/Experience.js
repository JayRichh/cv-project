import React from "react";
import ExperienceItem from "./ExperienceItem";

const Experience = ({ id, experienceInfo, onChange, onAdd, onRemove }) => {
  const experienceItems = experienceInfo.map((experienceItem) => (
    <ExperienceItem
      key={experienceItem.id}
      id={experienceItem.id}
      experienceItem={experienceItem}
      onChange={onChange}
      onAdd={onAdd}
      onRemove={onRemove}
    />
  ));
  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Experience</h2>
      </div>
      {experienceItems}
      <button className="add-button" onClick={() => onAdd(id)}>
        Add
      </button>
    </div>
  );
};

export default Experience;