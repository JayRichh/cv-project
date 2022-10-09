import React from "react";
import Personal from "./Personal";
import Contact from "./Contact";
import Experience from "./Experience";
import Education from "./Education";

const ResumeForm = ({
  resume,
  onChangePersonal,
  onChangeContact,
  onChangeExperience,
  onChangeEducation,
  onAddExperience,
  onAddEducation,
  onRemoveExperience,
  onRemoveEducation,
}) => {
  return (
    <div className="resume-form">
      <Personal
        personalInfo={resume.personalInfo}
        onChange={onChangePersonal}
      />
      <Contact contactInfo={resume.contactInfo} onChange={onChangeContact} />
      <Experience
        experienceInfo={resume.experienceInfo}
        onChange={onChangeExperience}
        onAdd={onAddExperience}
        onRemove={onRemoveExperience}
      />
      <Education
        educationInfo={resume.educationInfo}
        onChange={onChangeEducation}
        onAdd={onAddEducation}
        onRemove={onRemoveEducation}
      />
    </div>
  );
};

export default ResumeForm;