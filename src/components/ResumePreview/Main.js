import React from "react";
import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";

const Main = ({ experienceInfo, educationInfo }) => {
  const experienceItems = experienceInfo.map((experienceItem) => (
    <ExperienceItem key={experienceItem.id} experienceItem={experienceItem} />
  ));

  const educationItems = educationInfo.map((educationItem) => (
    <EducationItem key={educationItem.id} educationItem={educationItem} />
  ));

  return (
    <div className="resume-preview-main">
      <h1>Experience</h1>
      <div className="experience">{experienceItems}</div>
      <h1>Education</h1>
      <div className="education">{educationItems}</div>
    </div>
  );
};

export default Main;