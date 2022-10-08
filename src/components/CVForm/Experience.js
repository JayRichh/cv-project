import styled from "styled-components";

export default function Experience({
  position,
  company,
  city,
  experienceFrom,
  experienceTo,
  updateFields,
}) {
  return (
    <div>
      <Label htmlFor="Personal Information:">Personal Information:</Label>
      <Input
        id="position"
        type="text"
        autoFocus
        required
        placeholder="Position"
        value={position}
        onChange={e => updateFields({ position: e.target.value })}
      ></Input>
      <Input
        id="company"
        type="text"
        required
        placeholder="Comnapy"
        value={company}
        onChange={e => updateFields({ company: e.target.value })}
      ></Input>
      <Input
        id="city"
        type="text"
        required
        placeholder="City"
        value={city}
        onChange={e => updateFields({ city: e.target.value })}
      ></Input>
      <Input
        id="experienceFrom"
        type="number"
        required
        placeholder="From"
        value={experienceFrom}
        onChange={e => updateFields({ experienceFrom: e.target.value })}
      ></Input>
      <Input
        id="experienceTo"
        type="number"
        required
        placeholder="To"
        value={experienceTo}
        onChange={e => updateFields({ experienceTo: e.target.value })}
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
