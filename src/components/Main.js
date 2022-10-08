import styled from "styled-components"
import InputForm from "./CVForm/InputForm"

const Main = () => {
  return (
    <MainContainer>
      <h2>Hi, I'm the Main component</h2>
      <InputForm />
    </MainContainer>
  )
}

const MainContainer = styled.main`
  background-color: #fff;
  color: #000;
  padding: 1rem 0;
  text-align: center;
  min-height: calc(100vh - 195px);
  min-width: 800px;
`

export default Main