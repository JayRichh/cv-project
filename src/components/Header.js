import styled from 'styled-components'
import icon from '../assets/GitHub-Mark-Light-64px.png'
import logo from "../assets/building-icon.png";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo src={logo} alt="logo" />
        <h1>CV Builder</h1>
        <p>Build your CV in minutes</p>
        <a href="https://github.com/JayRichh" target="_blank" rel="noreferrer">
          <img src={icon} alt="GitHub Icon" />
        </a>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  background-color: #1e1e1e;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
`

const HeaderWrapper = styled.div`
  max-height: 90px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  
  h1 {
    font: 700 3rem 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 1rem;
    margin: auto auto 0 0;
    padding: 0 0 5px 10px;
    font-style: italic;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
    padding-right: 1rem;

    &:hover {
      color: #fff;
    }

    img {
      width: 1.5rem;
      scale: 1.2;
    }
  }
`

const Logo = styled.img`
  width: 2.5rem;
  margin: auto 0;
  padding: 0 1rem 0 0.5rem;
`

export default Header