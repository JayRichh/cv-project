import React from "react";

const Contact = ({ contactInfo, onChange }) => {
  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Contact Information</h2>
      </div>
      <form className="form">
        <div className="form-control">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="City, State"
            value={contactInfo.location}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-control">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="xxx.xxx.xxxx"
            value={contactInfo.phoneNumber}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@email.com"
            value={contactInfo.email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-control">
          <label>Website</label>
          <input
            type="text"
            name="website"
            placeholder="www.yourwebsite.com"
            value={contactInfo.website}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-control">
          <label>LinkedIn</label>
          <input
            type="text"
            name="linkedin"
            placeholder="https://www.linkedin.com/in/username"
            value={contactInfo.linkedin}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-control">
          <label>Github</label>
          <input
            type="text"
            name="github"
            placeholder="https://github.com/username"
            value={contactInfo.github}
            onChange={(e) => onChange(e)}
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;