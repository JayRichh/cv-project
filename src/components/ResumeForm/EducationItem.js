import React from "react";

const EducationItem = ({ id, educationItem, onChange, onRemove }) => {
  return (
    <>
      <form className="form">
        <div className="form-control">
          <label>School</label>
          <input
            type="text"
            name="school"
            placeholder="University Name"
            value={educationItem.school}
            onChange={(e) => onChange(e, id)}
          />
        </div>
        <div className="form-control">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="City, State"
            value={educationItem.location}
            onChange={(e) => onChange(e, id)}
          />
        </div>
        <div className="form-control">
          <label>Degree</label>
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={educationItem.degree}
            onChange={(e) => onChange(e, id)}
          />
        </div>
        <div className="form-control">
          <label>Major</label>
          <input
            type="text"
            name="major"
            placeholder="Major"
            value={educationItem.major}
            onChange={(e) => onChange(e, id)}
          />
        </div>
        <div className="form-control">
          <label>Start Date</label>
          <input
            type="text"
            name="startDate"
            placeholder="Year"
            value={educationItem.startDate}
            onChange={(e) => onChange(e, id)}
          />
        </div>
        <div className="form-control">
          <label>End Date</label>
          <input
            type="text"
            name="endDate"
            placeholder="Year"
            value={educationItem.endDate}
            onChange={(e) => onChange(e, id)}
          />
        </div>
        <button className="remove-button" onClick={() => onRemove(id)}>Remove</button>
      </form>
    </>
  );
};

export default EducationItem;