import styled from "styled-components";
import icon from "../assets/GitHub-Mark-Light-64px.png";
import logo from "../assets/building-icon.png";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo src={logo} alt="logo" />
        <h1>CV Builder</h1>
        <p>Create your CV in minutes</p>
        <a href="https://github.com/JayRichh" target="_blank" rel="noreferrer">
          <img src={icon} alt="GitHub Icon" />
        </a>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background-color: #1e1e1e;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
`;

const HeaderWrapper = styled.div`
  :root {
    --primary-color: #5c6168;
    --primary-washed-color: #f5f5f5;
    --secondary-color: #e8eaee;
    --secondary-washed-color: #f5f6f7;
    --contrast-color: #d67215;
  }

  max-height: 90px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;

  h1 {
    font: 700 3rem "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    color: var(--secondary-color);
  }

  p {
    font-size: 1.2rem;
    margin: auto auto 0 0;
    padding: 0 0 5px 10px;
    font-style: italic;
    color: var(--primary-color);
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
      scale: 1.5;
    }
  }
`;

const Logo = styled.img`
  width: 4rem;
  margin: auto 0;
  padding: 0 1rem 0 0.5rem;
`;

export default Header;
