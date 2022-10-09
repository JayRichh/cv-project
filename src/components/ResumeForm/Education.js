import React from "react";
import EducationItem from "./EducationItem";

const Education = ({ id, educationInfo, onChange, onAdd, onRemove }) => {
  const educationItems = educationInfo.map((educationItem) => (
    <EducationItem
      key={educationItem.id}
      id={educationItem.id}
      educationItem={educationItem}
      onChange={onChange}
      onAdd={onAdd}
      onRemove={onRemove}
    />
  ));
  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Education</h2>
      </div>
      {educationItems}
      <button className="add-button" onClick={() => onAdd(id)}>
        Add
      </button>
    </div>
  );
};

export default Education;