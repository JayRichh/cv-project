import styled from "styled-components";

export default function Education({
  school,
  degree,
  city,
  educationFrom,
  educationTo,
  updateEducationFields,
}) {
  return (
    <div>
      <Label htmlFor="Personal Information:">Education:</Label>
      <Input
        id="school"
        type="text"
        autoFocus
        required
        placeholder="School name"
        value={school}
        // update education fields takes fields and index as arguments
        onChange={e => updateEducationFields({ school: e.target.value }, 0)}
      ></Input>
      <Input
        id="degree"
        type="text"
        required
        placeholder="Degree"
        value={degree}
        onChange={e => updateEducationFields({ degree: e.target.value }, 0)}
      ></Input>
      <Input
        id="city"
        type="text"
        required
        placeholder="City"
        value={city}
        onChange={e => updateEducationFields({ city: e.target.value }, 0)}
      ></Input>
      <Input
        id="educationFrom"
        type="number"
        required
        placeholder="From"
        value={educationFrom}
        onChange={e => updateEducationFields({ educationFrom: e.target.value }, 0)}
      ></Input>
      <Input
        id="educationTo"
        type="number"
        required
        placeholder="to"
        value={educationTo}
        onChange={e => updateEducationFields({ educationTo: e.target.value }, 0)}
      ></Input>
      <ButtonContainer>
        <Button type="button">Add</Button>
        <Button type="button">Remove</Button>
      </ButtonContainer>
    </div>
  );
}

const Label = styled.label`
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
`;

const Input = styled.input`
  width: 100%;
  height: 2rem;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
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
