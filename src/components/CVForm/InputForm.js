import useMultiStepForm from "../Utils/useMultiStepForm.ts";
import styled from "styled-components";
import { useState } from "react";

import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";

const INITIAL_DATA = {
  title: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  description: "",
  education: [
    {
      school: "",
      degree: "",
      city: "",
      educationFrom: "",
      educationTo: "",
    },
  ],
  experience: [
    {
      company: "",
      position: "",
      city: "",
      experienceFrom: "",
      experienceTo: "",
    },
  ],
};

const InputForm = () => {
  const [data, setData] = useState(INITIAL_DATA);

  function updateInfoFields(fields) { 
    setData(prev => {
      return {
        ...prev,
        ...fields,
      };
    });
    console.log(data);
  }

  function updateEducationFields(fields, index) {
    setData(prev => {
      const education = [...prev.education];
      education[index] = {
        ...education[index],
        ...fields,
      };
      return {
        ...prev,
        education,
      };
    });
    console.log(data);
  }

  function updateExperienceFields(fields, index) {
    setData(prev => {
      const experience = [...prev.experience];
      experience[index] = {
        ...experience[index],
        ...fields,
      };
      return {
        ...prev,
        experience,
      };
    });
    console.log(data);
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <PersonalInfo {...data} updateInfoFields={updateInfoFields} />,
      <Education {...data} updateEducationFields={updateEducationFields} />,
      <Experience {...data} updateExperienceFields={updateExperienceFields} />,
    ]);

  function onSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");
    console.log(data);
    next();
  }

  return (
    <FormContainer>
      <form onSubmit={onSubmit}>
        <CounterContainer>
          {currentStepIndex + 1} / {steps.length}
        </CounterContainer>
        {step}
        <ButtonContainer>
          {!isFirstStep && (
            <Button type="button" onClick={back}>
              Back
            </Button>
          )}
          <Button type="submit">{isLastStep ? "Submit" : "Next"}</Button>
        </ButtonContainer>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  position: relative;
  background-color: #fff;
  border: 1px solid black;
  padding: 2rem;
  border-radius: 5px;
  margin: 1rem;
  font-family: "Roboto", sans-serif;
`;
const CounterContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;
const ButtonContainer = styled.div`
  margin: 1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;
const Button = styled.button`
  width: 100%;
  height: 2rem;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
`;
export default InputForm;
