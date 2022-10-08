import styled from "styled-components";

export default function PersonalInfo({
  optionsState,
  firstName,
  lastName,
  email,
  phone,
  address,
  description,
  updateInfoFields,
}) {
  return (
    <div>
      <Label htmlFor="Personal Information:">Personal Information:</Label>
      <Select
        id="title"
        type="text"
        required
        autoFocus
        value={optionsState}
        onChange={e => updateInfoFields({ title: e.target.value })}
      >
        <Option value="Undefined">Select title</Option>
        <Option value="Mr">Mr</Option>
        <Option value="Mrs">Mrs</Option>
        <Option value="Miss">Miss</Option>
        <Option value="Ms">Ms</Option>
        <Option value="Dr">Dr</Option>
        <Option value="Prof">Prof</Option>
        <Option value="Rev">Rev</Option>
        <Option value="Sir">Sir</Option>
        <Option value="Lady">Lady</Option>
        <Option value="Lord">Lord</Option>
      </Select>
      <Input
        id="firstName"
        type="text"
        required
        placeholder="First Name"
        value={firstName}
        onChange={e => updateInfoFields({ firstName: e.target.value })}
      ></Input>
      <Input
        id="lastName"
        type="text"
        required
        placeholder="Last Name"
        value={lastName}
        onChange={e => updateInfoFields({ lastName: e.target.value })}
      ></Input>
      <Input
        id="email"
        type="text"
        required
        placeholder="Email"
        value={email}
        onChange={e => updateInfoFields({ email: e.target.value })}
      ></Input>
      <Input
        id="phone"
        type="number"
        required
        placeholder="Phone"
        value={phone}
        onChange={e => updateInfoFields({ phone: e.target.value })}
      ></Input>
      <Input
        id="address"
        type="text"
        required
        placeholder="Address"
        value={address}
        onChange={e => updateInfoFields({ address: e.target.value })}
      ></Input>
      <TextArea
        id="description"
        type="text"
        required
        placeholder="Description"
        value={description}
        onChange={e => updateInfoFields({ description: e.target.value })}
      ></TextArea>
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

const Select = styled.select`
  width: 100%;
  height: 2rem;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
`;

const Option = styled.option`
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 5rem;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
`;
