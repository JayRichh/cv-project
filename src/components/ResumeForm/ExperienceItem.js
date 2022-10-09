import React from "react";

const ExperienceItem = ({ id, experienceItem, onChange, onRemove }) => {
  return (
    <>
      <form className="form">
        <div className="form-control">
          <label>Position</label>
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={experienceItem.position}
            onChange={(e) => onChange(e, id)}
          />
        </div>
        <div className="form-control">
          <label>Company</label>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={experienceItem.company}
            onChange={(e) => onChange(e, id)}
          />
        </div>
        <div className="form-control">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="City, State"
            value={experienceItem.location}
            onChange={(e) => onChange(e, id)}
          />
        </div>
        <div className="form-control">
          <label>Start Date</label>
          <input
            type="text"
            name="startDate"
            placeholder="Year"
            value={experienceItem.startDate}
            onChange={(e) => onChange(e, id)}
          />
        </div>
        <div className="form-control">
          <label>End Date</label>
          <input
            type="text"
            name="endDate"
            placeholder="Year"
            value={experienceItem.endDate}
            onChange={(e) => onChange(e, id)}
          />
        </div>
        <button className="remove-button" onClick={() => onRemove(id)}>Remove</button>
      </form>
    </>
  );
};

export default ExperienceItem;