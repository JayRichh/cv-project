import uniqid from "uniqid";

const resumeFormFields = {
  personalInfo: {
    firstName: "",
    lastName: "",
    jobTitle: "",
    description: "",
  },
  contactInfo: {
    location: "",
    phoneNumber: "",
    email: "",
    website: "",
    linkedin: "",
    github: "",
  },
  experienceInfo: [
    {
      id: uniqid(),
      position: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
    },
  ],
  educationInfo: [
    {
      id: uniqid(),
      school: "",
      location: "",
      degree: "",
      major: "",
      startDate: "",
      endDate: "",
    },
  ],
};

export default resumeFormFields;