import React from "react";
import { GoLocation } from "react-icons/go";
import {
  FaPhone,
  FaConnectdevelop,
  FaLinkedinIn,
  FaGithub,
  FaSquareFull,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Sidebar = ({ personalInfo, contactInfo }) => {
  const { firstName, lastName, jobTitle, description } = personalInfo;
  const { location, phoneNumber, email, website, linkedin, github } =
    contactInfo;
  return (
    <div className="resume-preview-sidebar">
      <h1>
        {firstName} {lastName}
      </h1>
      <h4>
        <FaSquareFull
          style={{
            fill: "#d67215",
            marginRight: "0.5rem",
            fontSize: "0.5rem",
          }}
        />
        {jobTitle}
      </h4>
      <div className="contact-info">
        <p>
          <GoLocation
            style={{
              marginRight: "0.5rem",
            }}
          />
          {location}
        </p>
        <p>
          <FaPhone
            style={{
              marginRight: "0.5rem",
            }}
          />
          {phoneNumber}
        </p>
        <p>
          <MdOutlineEmail
            style={{
              marginRight: "0.5rem",
            }}
          />
          {email}
        </p>
        <p>
          <FaConnectdevelop
            style={{
              marginRight: "0.5rem",
            }}
          />
          {website}
        </p>
        <p>
          <FaLinkedinIn
            style={{
              marginRight: "0.5rem",
            }}
          />
          {linkedin}
        </p>
        <p>
          <FaGithub
            style={{
              marginRight: "0.5rem",
            }}
          />
          {github}
        </p>
        <p>
          <FaSquareFull
            style={{
              fill: "#d67215",
              marginRight: "0.5rem",
              fontSize: "0.5rem",
            }}
          />
          {description}
        </p>
      </div>
    </div>
  );
}
export default Sidebar;