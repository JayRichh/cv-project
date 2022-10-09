import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

// have to convert this to class component for react-to-print to work
class ResumePreview extends React.Component {
  render() {
    const { resume } = this.props;
    return (
      <div className="resume-preview">
        <Sidebar
          personalInfo={resume.personalInfo}
          contactInfo={resume.contactInfo}
        />
        <Main
          experienceInfo={resume.experienceInfo}
          educationInfo={resume.educationInfo}
        />
      </div>
    );
  }
}

// const ResumePreview = ({ resume }) => {
//   return (
//     <div className="resume-preview">
//       <Sidebar
//         personalInfo={resume.personalInfo}
//         contactInfo={resume.contactInfo}
//       />
//       <Main
//         experienceInfo={resume.experienceInfo}
//         educationInfo={resume.educationInfo}
//       />
//     </div>
//   );
// };

export default ResumePreview;