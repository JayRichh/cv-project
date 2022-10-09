import React from "react";

const Personal = ({ personalInfo, onChange }) => {
  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Personal Information</h2>
      </div>
      <form className="form">
        <div className="form-control">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={personalInfo.firstName}
            onChange={(e) => onChange(e)}
            autoFocus
          />
        </div>
        <div className="form-control">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={personalInfo.lastName}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-control">
          <label>Job Title</label>
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={personalInfo.jobTitle}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-control">
        <label>Description</label>
          <textarea
            type="text"
            name="description"
            placeholder="Tell us about yourself"
            value={personalInfo.description}
            onChange={(e) => onChange(e)}
          />
        </div>
      </form>
    </div>
  );
};

export default Personal;